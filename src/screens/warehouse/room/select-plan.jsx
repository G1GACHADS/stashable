import { View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import plans from '../../../constants/plans'

import { currencyFormatter } from '../../../shared/currencyFormatter'

import BaseText from '../../../components/base-text'

const CoreSelectPlanOption = styled.Pressable`
  flex-direction: row;
  align-items: center;
  min-width: 50%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white1};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.grey2};
  border-width: 2px;
  border-radius: 5px;
`

const Radio = styled.View`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.white1};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.grey2};
  border-width: 2px;
  border-radius: 100px;
`

const SelectPlanOption = ({ theme, price, plan, isSelected, onPress }) => (
  <CoreSelectPlanOption
    isSelected={isSelected}
    onPress={onPress}
    android_ripple={{ color: `hsla(${theme.colors.primaryHSL}, 0.15)` }}
  >
    <Radio isSelected={isSelected} />
    <View>
      <BaseText color="black" semiBold tall lg>
        {plan} Price
      </BaseText>
      <BaseText color="primary" semiBold tall lg>
        {currencyFormatter(price)}
      </BaseText>
    </View>
  </CoreSelectPlanOption>
)

export const SelectPlan = ({ basePrice, selectedPlan, setSelectedPlan }) => {
  const theme = useTheme()

  return (
    <>
      <BaseText color="black" semiBold tall lg>
        Select Plan
      </BaseText>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <View style={{ paddingRight: 10 }}>
          <SelectPlanOption
            theme={theme}
            plan={plans.MONTHLY}
            price={basePrice}
            isSelected={selectedPlan === plans.MONTHLY}
            onPress={() => setSelectedPlan(plans.MONTHLY)}
          />
        </View>
        <SelectPlanOption
          theme={theme}
          plan={plans.YEARLY}
          price={basePrice * 12}
          isSelected={selectedPlan === plans.YEARLY}
          onPress={() => setSelectedPlan(plans.YEARLY)}
        />
      </View>
    </>
  )
}

export default SelectPlan
