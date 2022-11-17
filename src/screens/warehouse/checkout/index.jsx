import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { Dimensions, Platform, ScrollView, StatusBar, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import api from '../../../api'
import routes from '../../../constants/routes'
import shipping from '../../../constants/shipping'

import ItemForm from './item-form'
import ItemSelectShippingType from './item-select-shipping-type'
import ItemUploadZone from './item-upload-zone'

import BaseText from '../../../components/base-text'
import Button from '../../../components/button'
import Container from '../../../components/container'
import Input from '../../../components/input'
import Label from '../../../components/label'

import HorizontalCardItem from '../../../components/horizontal-card-item'
import { currencyFormatter } from '../../../shared/currencyFormatter'

const CoreCheckoutPaymentPanel = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
  padding-top: 25px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.colors.grey2};
`

const CheckoutPaymentPanel = ({
  error,
  totalFee,
  isPaidAnnually,
  loading,
  disabled,
  nextStep,
}) => {
  return (
    <>
      {error !== '' && (
        <BaseText color="primary" capitalize medium tall lg mb={15}>
          {error}
        </BaseText>
      )}
      <CoreCheckoutPaymentPanel>
        <View>
          <BaseText medium tall lg mb={5}>
            Total Payment
          </BaseText>
          <BaseText color="primary" semiBold tall xl mb={5}>
            {currencyFormatter(totalFee)}/{isPaidAnnually ? 'year' : 'month'}
          </BaseText>
        </View>
        <Button
          sm
          title="Checkout"
          disabled={disabled}
          loading={loading}
          onPress={nextStep}
        />
      </CoreCheckoutPaymentPanel>
    </>
  )
}

const FirstStep = ({
  theme,
  form,
  setForm,
  loading,
  warehouse,
  room,
  shippingType,
  setShippingType,
  totalFee,
  isPaidAnnually,
  error,
  nextStep,
}) => {
  const imagesArrayIsEmpty = value =>
    Array.isArray(value) && value.every(item => item === null)

  const isEmpty =
    Object.values(form).some(
      value => value === '' || imagesArrayIsEmpty(value)
    ) || !shippingType

  const keyedCategories = useMemo(
    () =>
      warehouse.relationships.categories.map(category =>
        category.toLowerCase()
      ),
    [warehouse.relationships.categories]
  )

  const subtitle = `${room.attributes['length']} meter x ${room.attributes['width']} meter x ${room.attributes['height']} meter`

  return (
    <>
      <BaseText semiBold tall lg mb={10}>
        Picked Room
      </BaseText>
      <HorizontalCardItem
        title={room.attributes['name']}
        subtitle={subtitle}
        price={room.attributes['price']}
        priceLabel="Price For"
        imageURL={room.attributes['image_url']}
        categories={keyedCategories}
      />
      <ItemUploadZone form={form} setForm={setForm} />
      <ItemForm form={form} setForm={setForm} />
      <ItemSelectShippingType
        theme={theme}
        shippingType={shippingType}
        setShippingType={setShippingType}
      />
      <CheckoutPaymentPanel
        theme={theme}
        totalFee={totalFee}
        isPaidAnnually={isPaidAnnually}
        disabled={isEmpty}
        error={error}
        loading={loading}
        nextStep={nextStep}
      />
    </>
  )
}

const InlineFormWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

const InlineFormItem = styled.View`
  min-width: 50%;
`

const SecondStep = ({ rentalID, nextStep }) => {
  const [paymentMethod, setPaymentMethod] = useState({
    creditCardNumber: '5399 9245 6467 1955',
    expirationDate: '02/27',
    cvc: '553',
    nameOnCreditCard: 'Brian Tracy',
  })
  const [loading, setLoading] = useState(false)

  const isEmpty = Object.values(paymentMethod).some(value => value === '')

  const handlePaymentMethodSubmit = useCallback(async () => {
    setLoading(true)
    await api
      .patch(`/rent/${rentalID}/pay`, {})
      .finally(() => setLoading(false))
    nextStep()
  }, [rentalID, nextStep])

  return (
    <>
      <Label>Credit Card Number</Label>
      <Input
        value={paymentMethod.creditCardNumber}
        placeholder="XXXX-XXXX-XXXX"
        keyboardType="numeric"
        onChangeText={creditCardNumber =>
          setPaymentMethod({ ...paymentMethod, creditCardNumber })
        }
      />

      <InlineFormWrapper>
        <InlineFormItem style={{ paddingRight: 10 }}>
          <Label>Expiration Date</Label>
          <Input
            value={paymentMethod.expirationDate}
            placeholder="MM/YY"
            keyboardType={
              Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'default'
            }
            onChangeText={expirationDate =>
              setPaymentMethod({ ...paymentMethod, expirationDate })
            }
          />
        </InlineFormItem>

        <InlineFormItem>
          <Label>CVC</Label>
          <Input
            value={paymentMethod.cvc}
            placeholder="Security Code"
            keyboardType="numeric"
            onChangeText={cvc => setPaymentMethod({ ...paymentMethod, cvc })}
          />
        </InlineFormItem>
      </InlineFormWrapper>

      <Label>Name on Credit Card</Label>
      <Input
        value={paymentMethod.nameOnCreditCard}
        placeholder="Brian Tracy"
        onChangeText={nameOnCreditCard =>
          setPaymentMethod({ ...paymentMethod, nameOnCreditCard })
        }
      />

      <Button
        title="Next"
        disabled={isEmpty}
        loading={loading}
        onPress={handlePaymentMethodSubmit}
      />
    </>
  )
}

const SuccessView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${Dimensions.get('window').height * 0.25}px;
`

const FinalStep = ({ navigation, rentalID }) => (
  <>
    <SuccessView>
      <BaseText semiBold grande md>
        🎉
      </BaseText>
      <BaseText semiBold grande md>
        Payment Successful
      </BaseText>
      <Button
        title="Check Your Order"
        sm
        mt={10}
        onPress={() => {
          navigation.navigate(routes.historyDetailPageRoute, {
            rentalID,
          })
        }}
      />
    </SuccessView>
  </>
)

export function CheckoutScreen({ route, navigation }) {
  const theme = useTheme()

  const {
    warehouse,
    room,
    isPaidAnnually,
    totalFee,
    startAtStep = 0,
  } = route.params

  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: 'Aqua Gelas Air 240 ML 12 dus isi 48',
    description: `Aqua Gelas Air Mineral (48 x 220ml)

Air mineral berkualitas yang berasal dari sumber air pegunungan pilihan dan terlindungi. AQUA melindungi keseimbangan alami ekosistem sumber airnya sehingga kekayaan dan kealamian mineralnya terjaga.

AQUA, kebaikan alam, kebaikan hidup.`,
    length: '30',
    width: '15',
    height: '30',
    weight: '5',
    quantity: '12',
    images: [null, null, null, null],
  })
  const [shippingType, setShippingType] = useState(shipping.pickUpTruck)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [rentalID, setRentalID] = useState(startAtStep)

  // Change title based on step
  useLayoutEffect(() => {
    if (step === 0) {
      navigation.setOptions({ title: 'Checkout' })
    } else if (step === 1) {
      navigation.setOptions({ title: 'Payment Method' })
    } else if (step === 2) {
      navigation.setOptions({ title: 'Payment Success' })
    }
  }, [step])

  const nextStep = useCallback(() => {
    setStep(step + 1)
  }, [step])

  const handleCheckoutSubmit = useCallback(() => {
    const payload = new FormData()

    payload.append('name', form.name)
    payload.append('description', form.description)
    payload.append('length', form.length)
    payload.append('width', form.width)
    payload.append('height', form.height)
    payload.append('weight', form.weight)
    payload.append('quantity', form.quantity)
    payload.append('shipping_type', shippingType)
    payload.append('paid_annually', isPaidAnnually)
    payload.append('room_id', room.attributes.id)
    payload.append('category_id', 1) // TODO: remove this

    form.images.forEach((image, _) => {
      if (image) {
        payload.append('images[]', {
          uri: image,
          type: `image/${image.split('.').pop()}`,
          name: image.split('/').pop(),
        })
      }
    })

    setLoading(true)
    api
      .post(`/rent/${warehouse.attributes.id}`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        setRentalID(response.data['rental_id'])
        alert(response.data['message'])
        nextStep()
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [form, shippingType])

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>
          {step === 0 && (
            <FirstStep
              theme={theme}
              room={room}
              warehouse={warehouse}
              form={form}
              setForm={setForm}
              loading={loading}
              shippingType={shippingType}
              setShippingType={setShippingType}
              totalFee={totalFee}
              isPaidAnnually={isPaidAnnually}
              error={error}
              nextStep={handleCheckoutSubmit}
            />
          )}
          {step === 1 && <SecondStep rentalID={rentalID} nextStep={nextStep} />}
          {step === 2 && (
            <FinalStep rentalID={rentalID} navigation={navigation} />
          )}
        </Container>
      </ScrollView>
    </>
  )
}

export default CheckoutScreen
