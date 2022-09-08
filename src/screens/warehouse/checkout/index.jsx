import { useCallback, useLayoutEffect, useState } from 'react'
import { Dimensions, Platform, ScrollView, StatusBar, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import Button from '../../../components/button'
import Container from '../../../components/container'
import Input from '../../../components/input'
import Label from '../../../components/label'
import BaseText from '../../../components/base-text'

import ItemForm from './item-form'
import ItemSelectShippingType from './item-select-shipping-type'
import ItemUploadZone from './item-upload-zone'

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

const CheckoutPaymentPanel = ({ totalFee, disabled, nextStep }) => {
  return (
    <CoreCheckoutPaymentPanel>
      <View>
        <BaseText medium tall lg mb={5}>
          Total Payment
        </BaseText>
        <BaseText color="primary" semiBold tall xl mb={5}>
          Rp.{totalFee}/month
        </BaseText>
      </View>
      <Button sm title="Checkout" disabled={disabled} onPress={nextStep} />
    </CoreCheckoutPaymentPanel>
  )
}

const FirstStep = ({
  theme,
  form,
  setForm,
  shippingType,
  setShippingType,
  nextStep,
}) => {
  const isEmpty =
    Object.values(form).some(value => value === '') || !shippingType

  return (
    <>
      <BaseText semiBold tall lg mb={10}>
        Picked Room
      </BaseText>
      <ItemUploadZone />
      <ItemForm form={form} setForm={setForm} />
      <ItemSelectShippingType
        theme={theme}
        shippingType={shippingType}
        setShippingType={setShippingType}
      />
      <CheckoutPaymentPanel
        totalFee={5000000}
        disabled={isEmpty}
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

const SecondStep = ({ nextStep }) => {
  const [paymentMethod, setPaymentMethod] = useState({
    creditCardNumber: '',
    expirationDate: '',
    cvc: '',
    nameOnCreditCard: '',
  })

  const isEmpty = Object.values(paymentMethod).some(value => value === '')

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

      <Button title="Next" disabled={isEmpty} onPress={nextStep} />
    </>
  )
}

const SuccessView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${Dimensions.get('window').height * 0.25}px;
`

const FinalStep = () => (
  <>
    <SuccessView>
      <BaseText semiBold grande md>
        🎉
      </BaseText>
      <BaseText semiBold grande md>
        Payment Successful
      </BaseText>
      <Button sm title="Check Your Order" />
    </SuccessView>
  </>
)

export function CheckoutScreen({ navigation }) {
  const theme = useTheme()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: '',
    description: '',
    length: '',
    width: '',
    height: '',
    weight: '',
    quantity: '',
  })
  const [shippingType, setShippingType] = useState('')

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

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>
          {step === 0 && (
            <FirstStep
              theme={theme}
              form={form}
              setForm={setForm}
              shippingType={shippingType}
              setShippingType={setShippingType}
              nextStep={nextStep}
            />
          )}
          {step === 1 && <SecondStep nextStep={nextStep} />}
          {step === 2 && <FinalStep navigation={navigation} />}
        </Container>
      </ScrollView>
    </>
  )
}

export default CheckoutScreen
