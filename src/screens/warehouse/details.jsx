import styled from 'styled-components/native'

import IconChemical from '../../components/icons/icon-chemical'
import IconElectric from '../../components/icons/icon-electric'
import IconFragile from '../../components/icons/icon-fragile'
import IconHeavyMaterial from '../../components/icons/icon-heavymaterial'
import BaseText from '../../components/base-text'
import { ActivityIndicator } from 'react-native'

const DetailContainer = styled.View`
  margin-top: 15px;
  align-items: baseline;
`

const CategoryContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CategoryIcon = styled.View`
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 5px;
`

export function Details({ isLoading, warehouse, navigation }) {
  return (
    <>
      <DetailContainer>
        <BaseText semiBold tall lg mb={5}>
          Supports
        </BaseText>
        <CategoryContainer>
          <CategoryIcon>
            <IconFragile />
          </CategoryIcon>
          <CategoryIcon>
            <IconElectric />
          </CategoryIcon>
          <CategoryIcon>
            <IconHeavyMaterial />
          </CategoryIcon>
          <CategoryIcon>
            <IconChemical />
          </CategoryIcon>
        </CategoryContainer>
      </DetailContainer>
      <DetailContainer>
        <BaseText semiBold tall lg mb={5}>
          Description
        </BaseText>
        <BaseText color="grey3" regular tall md mb={5}>
          {isLoading && <ActivityIndicator />}
          {!isLoading && warehouse.attributes['description']}
        </BaseText>
      </DetailContainer>
      <DetailContainer>
        <BaseText semiBold tall lg mb={5}>
          Contact Number
        </BaseText>
        <BaseText color="grey3" regular tall md mb={5}>
          {isLoading && <ActivityIndicator />}
          {!isLoading && warehouse.attributes['email']}
        </BaseText>
        <BaseText color="grey3" regular tall md mb={5}>
          {isLoading && <ActivityIndicator />}
          {!isLoading && warehouse.attributes['phone_number']}
        </BaseText>
      </DetailContainer>
    </>
  )
}

export default Details
