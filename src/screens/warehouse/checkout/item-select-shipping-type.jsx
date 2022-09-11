import styled, { css } from 'styled-components/native'

import BaseText from '../../../components/base-text'
import IconDelivery from '../../../components/icons/icon-delivery'
import IconWalking from '../../../components/icons/icon-walking'
import Label from '../../../components/label'

const CoreShippingTypeOption = styled.Pressable`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  border-width: 2px;
  border-radius: 10px;
  border-color: transparent;
  border-style: solid;
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) =>
        `hsla(${theme.colors.primaryHSL}, 0.15)`};

      border-color: ${({ theme }) => theme.colors.primary};
    `}
`

const ShippingTypeOption = ({ theme, title, icon, selected, onPress }) => (
  <CoreShippingTypeOption
    selected={selected}
    onPress={onPress}
    android_ripple={{ color: `hsla(${theme.colors.primaryHSL}, 0.15)` }}
  >
    {icon}
    <BaseText
      color={selected ? 'primary' : 'grey4'}
      semiBold
      tall
      xl
      mt={10}
      mb={10}
      ml={10}
    >
      {title}
    </BaseText>
  </CoreShippingTypeOption>
)

const ShippingTypeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

export const ItemSelectShippingType = ({
  theme,
  shippingType,
  setShippingType,
}) => {
  return (
    <>
      <Label>Select Shipping Type</Label>
      <ShippingTypeContainer>
        <ShippingTypeOption
          theme={theme}
          key="self-service"
          title="Self Service"
          icon={
            <IconWalking
              fill={
                shippingType === 'self-service'
                  ? theme.colors.primary
                  : theme.colors.grey4
              }
            />
          }
          selected={shippingType === 'self-service'}
          onPress={() => setShippingType('self-service')}
        />
        <ShippingTypeOption
          theme={theme}
          key="delivery"
          title="Delivery"
          icon={
            <IconDelivery
              fill={
                shippingType === 'delivery'
                  ? theme.colors.primary
                  : theme.colors.grey4
              }
            />
          }
          selected={shippingType === 'delivery'}
          onPress={() => setShippingType('delivery')}
        />
      </ShippingTypeContainer>
    </>
  )
}

export default ItemSelectShippingType
