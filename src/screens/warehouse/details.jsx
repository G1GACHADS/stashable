import styled from 'styled-components/native'

import BaseText from '../../components/base-text'
import IconChemical from '../../components/icons/icon-chemical'
import IconElectric from '../../components/icons/icon-electric'
import IconFragile from '../../components/icons/icon-fragile'
import IconHeavyMaterial from '../../components/icons/icon-heavymaterial'
import Loading from '../../components/loading'

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
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  margin-bottom: 15px;
  margin-right: 15px;
`

const WarehouseDetailSupportedCategories = ({ categories }) => (
  <CategoryContainer>
    {categories.includes('Fragile') && (
      <CategoryIcon>
        <IconFragile />
      </CategoryIcon>
    )}
    {categories.includes('Electric') && (
      <CategoryIcon>
        <IconElectric />
      </CategoryIcon>
    )}
    {categories.includes('Heavy Materials') && (
      <CategoryIcon>
        <IconHeavyMaterial />
      </CategoryIcon>
    )}
    {categories.includes('Chemical') && (
      <CategoryIcon>
        <IconChemical />
      </CategoryIcon>
    )}
  </CategoryContainer>
)

export function Details({ loading, warehouse, navigation }) {
  return (
    <>
      <DetailContainer>
        <BaseText semiBold tall xl mb={5}>
          Supports
        </BaseText>
        <WarehouseDetailSupportedCategories
          categories={warehouse.relationships.categories}
        />
      </DetailContainer>
      <DetailContainer>
        <BaseText semiBold tall xl mb={5}>
          Description
        </BaseText>
        <BaseText color="grey3" regular tall md mb={5}>
          {loading && <Loading />}
          {!loading && warehouse.attributes['description']}
        </BaseText>
      </DetailContainer>
      <DetailContainer>
        <BaseText semiBold tall xl mb={5}>
          Contact
        </BaseText>
        <BaseText color="grey3" regular tall md mb={5}>
          {loading && <Loading />}
          {!loading && warehouse.attributes['email']}
        </BaseText>
        <BaseText color="grey3" regular tall md mb={20}>
          {loading && <Loading />}
          {!loading && warehouse.attributes['phone_number']}
        </BaseText>
      </DetailContainer>
    </>
  )
}

export default Details
