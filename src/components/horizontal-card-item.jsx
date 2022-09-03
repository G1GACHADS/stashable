import styled from 'styled-components/native'

import BaseText from './base-text'
import IconFragileCategory from './icons/icon-fragile-category'
import IconElectricCategory from './icons/icon-electric-category'
import IconHeavyMaterialsCategory from './icons/icon-heavy-materials-category'
import IconChemicalCategory from './icons/icon-chemical-category'
import { useMemo } from 'react'

const CoreHorizontalCardItem = styled.View`
  display: flex;
  flex-direction: row;
`

const CoreHorizontalCardImage = styled.Image`
  max-width: 100px;
  max-height: 100px;
  border-radius: 10px;
`

const CoreHorizontalCardContent = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const CategoriesRow = styled.View`
  display: flex;
  flex-direction: row;
`

const CategoriesItem = styled.View`
  margin-right: 5px;
`

export const HorizontalCardItem = ({
  imageURL,
  title,
  subtitle,
  categories,
  priceLabel,
  price,
}) => {
  const categoryIcons = useMemo(
    () =>
      categories.map(category => {
        if (category === 'fragile') {
          return (
            <CategoriesItem>
              <IconFragileCategory />
            </CategoriesItem>
          )
        }
        if (category === 'electric') {
          return (
            <CategoriesItem>
              <IconElectricCategory />
            </CategoriesItem>
          )
        }
        if (category === 'heavy material') {
          return (
            <CategoriesItem>
              <IconHeavyMaterialsCategory />
            </CategoriesItem>
          )
        }

        return (
          <CategoriesItem>
            <IconChemicalCategory />
          </CategoriesItem>
        )
      }),
    [categories]
  )

  return (
    <CoreHorizontalCardItem>
      <CoreHorizontalCardImage
        source={require('../assets/images/warehouse-banner.png')}
        resizeMode="cover"
      />
      <CoreHorizontalCardContent>
        <BaseText semiBold tall md>
          {title}
        </BaseText>
        <BaseText color="grey3" regular tall sm>
          {subtitle}
        </BaseText>
        <CategoriesRow>
          {categoryIcons.map(icon => (
            <CategoriesItem>{icon}</CategoriesItem>
          ))}
        </CategoriesRow>
        <BaseText regular tall sm>
          {priceLabel}
        </BaseText>
        <BaseText color="primary" semiBold tall md>
          Rp.{price}/month
        </BaseText>
      </CoreHorizontalCardContent>
    </CoreHorizontalCardItem>
  )
}

export default HorizontalCardItem
