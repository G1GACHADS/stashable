import { useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import Button from '../../../components/button'
import Container from '../../../components/container'
import Text from '../../../components/text'

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

const CheckoutPaymentPanel = ({ theme, totalFee }) => {
  return (
    <CoreCheckoutPaymentPanel>
      <View>
        <Text
          color={theme.colors.black}
          weight={theme.typography.weight.medium}
          size={theme.typography.tall.lg}
          mb="5"
        >
          Total Payment
        </Text>
        <Text
          color={theme.colors.primary}
          weight={theme.typography.weight.semiBold}
          size={theme.typography.tall.xl}
          mb="5"
        >
          Rp.{totalFee}/month
        </Text>
      </View>
      <Button sm title="Checkout" />
    </CoreCheckoutPaymentPanel>
  )
}

export function CheckoutScreen({ navigation }) {
  const theme = useTheme()
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

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>
          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.tall.lg}
            mb="10"
          >
            Picked Room
          </Text>
          <ItemUploadZone />
          <ItemForm form={form} setForm={setForm} />
          <ItemSelectShippingType
            theme={theme}
            shippingType={shippingType}
            setShippingType={setShippingType}
          />
          <CheckoutPaymentPanel theme={theme} totalFee={5000000} />
        </Container>
      </ScrollView>
    </>
  )
}

export default CheckoutScreen
