import { useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import BaseText from '../../../components/base-text'

const plans = {
  MONTHLY: 'Monthly',
  YEARLY: 'Yearly',
}

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

const SelectPlanOption = ({ price, plan, setSelectedPlan, isSelected }) => (
  <CoreSelectPlanOption
    isSelected={isSelected}
    onPress={() => setSelectedPlan(plan)}
  >
    <Radio isSelected={isSelected} />
    <View>
      <BaseText color="black" semiBold tall lg>
        {plan} Price
      </BaseText>
      <BaseText color="primary" semiBold tall lg>
        Rp. {price}
      </BaseText>
    </View>
  </CoreSelectPlanOption>
)

export const SelectPlan = ({ basePrice }) => {
  const [selectedPlan, setSelectedPlan] = useState(plans.MONTHLY)

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
            plan={plans.MONTHLY}
            price={basePrice}
            isSelected={selectedPlan === plans.MONTHLY}
            setSelectedPlan={setSelectedPlan}
          />
        </View>
        <SelectPlanOption
          plan={plans.YEARLY}
          price={basePrice * 12}
          isSelected={selectedPlan === plans.YEARLY}
          setSelectedPlan={setSelectedPlan}
        />
      </View>
    </>
  )
}

export default SelectPlan
