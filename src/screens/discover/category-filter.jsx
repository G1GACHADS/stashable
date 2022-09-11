import { useState } from 'react'
import styled, { useTheme } from 'styled-components/native'
import Text from '../../components/text'

import { useCallback } from 'react'
import BaseText from '../../components/base-text'
import IconChemicalCategory from '../../components/icons/icon-chemical-category'
import IconElectricCategory from '../../components/icons/icon-electric-category'
import IconFragileCategory from '../../components/icons/icon-fragile-category'
import IconHeavyMaterialsCategory from '../../components/icons/icon-heavy-materials-category'

const category = {
  FRAGILE: 'Fragile',
  ELECTRIC: 'Electric',
  HEAVYMATERIALS: 'Heavy Materials',
  CHEMICAL: 'Chemical',
}

const CategoryContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CategoryIcon = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.white1};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.black};
`

export function CategoryFilter() {
  const theme = useTheme()
  const [selectedCategories, setSelectedCategories] = useState([])

  const supportedCategories = [
    { name: category.FRAGILE, icon: <IconFragileCategory /> },
    { name: category.ELECTRIC, icon: <IconElectricCategory /> },
    { name: category.HEAVYMATERIALS, icon: <IconHeavyMaterialsCategory /> },
    { name: category.CHEMICAL, icon: <IconChemicalCategory /> },
  ]

  function categoryIsSelected(category) {
    return selectedCategories.includes(category)
  }

  const handleToggleCategoryFilter = useCallback(
    category => {
      if (!categoryIsSelected(category)) {
        setSelectedCategories(selectedCategories => [
          ...selectedCategories,
          category,
        ])
        return
      }

      setSelectedCategories(selectedCategories =>
        selectedCategories.filter(
          selectedCategory => selectedCategory !== category
        )
      )
    },
    [selectedCategories]
  )

  return (
    <>
      <Text
        color={theme.colors.black}
        weight={theme.typography.weight.semiBold}
        size={theme.typography.tall.xl}
      >
        Category
      </Text>
      <CategoryContainer>
        {supportedCategories.map(({ name, icon }) => (
          <CategoryIcon
            onPress={() => handleToggleCategoryFilter(name)}
            isSelected={categoryIsSelected(name)}
          >
            {icon}
            <BaseText
              color={categoryIsSelected(name) ? 'white1' : 'black'}
              semiBold
              tall
              sm
              pl={10}
            >
              {name}
            </BaseText>
          </CategoryIcon>
        ))}
      </CategoryContainer>
    </>
  )
}

export default CategoryFilter
