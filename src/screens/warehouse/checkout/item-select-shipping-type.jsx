import styled, { css } from 'styled-components/native'

import BaseText from '../../../components/base-text'
import IconDelivery from '../../../components/icons/icon-delivery'
import IconWalking from '../../../components/icons/icon-walking'
import shipping from '../../../constants/shipping'

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

const CoreVehicleOption = styled.Pressable`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white2};
  border-radius: 5px;
  border-width: 2px;
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

const VehicleOptionImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 60px;
  resize-mode: contain;
`

const VehicleOption = ({ theme, title, image, selected, onPress }) => (
  <CoreVehicleOption
    selected={selected}
    onPress={onPress}
    android_ripple={{ color: `hsla(${theme.colors.primaryHSL}, 0.15)` }}
  >
    <BaseText color="grey3" semiBold tall xl>
      {title}
    </BaseText>

    <VehicleOptionImage source={image} />
  </CoreVehicleOption>
)

const VehicleOptionRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`

const SelectVehicleType = ({ theme, shippingType, setShippingType }) => {
  return (
    <>
      <BaseText semiBold tall lg mt={10} mb={10}>
        Select Vehicle Type
      </BaseText>
      <VehicleOptionRow>
        <VehicleOption
          theme={theme}
          title={'Pick Up Truck'}
          image={require('../../../assets/images/vehicles/pick-up-truck.png')}
          selected={shippingType === shipping.pickUpTruck}
          onPress={() => setShippingType(shipping.pickUpTruck)}
        />
        <VehicleOption
          theme={theme}
          title={'Pick Up Box'}
          image={require('../../../assets/images/vehicles/pick-up-box.png')}
          selected={shippingType === shipping.pickUpBox}
          onPress={() => setShippingType(shipping.pickUpBox)}
        />
      </VehicleOptionRow>
      <VehicleOptionRow>
        <VehicleOption
          theme={theme}
          title={'Van'}
          image={require('../../../assets/images/vehicles/van.png')}
          selected={shippingType === shipping.van}
          onPress={() => setShippingType(shipping.van)}
        />
        <VehicleOption
          theme={theme}
          title={'Truck'}
          image={require('../../../assets/images/vehicles/truck.png')}
          selected={shippingType === shipping.truck}
          onPress={() => setShippingType(shipping.truck)}
        />
      </VehicleOptionRow>
    </>
  )
}

const ShippingTypeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const ItemSelectShippingType = ({
  theme,
  shippingType,
  setShippingType,
}) => {
  const isPickUpSelected = Object.values(shipping)
    .filter(s => s != shipping.selfService)
    .includes(shippingType)
  return (
    <>
      <BaseText semiBold tall lg mt={10} mb={10}>
        Select Pick Up Service
      </BaseText>
      <ShippingTypeContainer>
        <ShippingTypeOption
          theme={theme}
          key="pick-up"
          title="Pick Up"
          icon={
            <IconDelivery
              fill={
                isPickUpSelected ? theme.colors.primary : theme.colors.grey4
              }
            />
          }
          selected={isPickUpSelected}
          onPress={() => setShippingType(shipping.pickUpTruck)}
        />
        <ShippingTypeOption
          theme={theme}
          key="self-service"
          title="Self Service"
          icon={
            <IconWalking
              fill={
                shippingType === shipping.selfService
                  ? theme.colors.primary
                  : theme.colors.grey4
              }
            />
          }
          selected={shippingType === shipping.selfService}
          onPress={() => setShippingType(shipping.selfService)}
        />
      </ShippingTypeContainer>
      {isPickUpSelected && (
        <SelectVehicleType
          shippingType={shippingType}
          setShippingType={setShippingType}
          theme={theme}
        />
      )}
    </>
  )
}

export default ItemSelectShippingType
