import { useState } from 'react'
import styled, { useTheme } from 'styled-components/native'
import Container from '../../components/container'
import Text from '../../components/text'

import IconChemicalCategory from '../../components/icons/icon-chemical-category'
import IconElectricCategory from '../../components/icons/icon-electric-category'
import IconFragileCategory from '../../components/icons/icon-fragile-category'
import IconHeavyMaterialsCategory from '../../components/icons/icon-heavy-materials-category'

const category = {
  FRAGILE: 'fragile',
  ELECTRIC: 'electric',
  HEAVYMATERIAL: 'heavymaterial',
  CHEMICAL: 'chemical',
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

export function Category({ navigation }) {
  const theme = useTheme()
  const [selectedCategories, setSelectedCategories] = useState([])
  const [searchKey, setSearchKey] = useState([])
  function categorySelected(category) {
    return selectedCategories.includes(category)
  }
  function toggleCategoryFilter(category) {
    if (!categorySelected(category)) {
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
  }
  return (
    <>
      <Container>
        <Text
          color={theme.colors.black}
          weight={theme.typography.weight.semiBold}
          size={theme.typography.tall.xl}
        >
          Category
        </Text>
        <CategoryContainer>
          <CategoryIcon
            onPress={() => toggleCategoryFilter(category.FRAGILE)}
            isSelected={categorySelected(category.FRAGILE)}
          >
            <IconFragileCategory />
            <Text
              color={
                categorySelected(category.FRAGILE)
                  ? theme.colors.white1
                  : theme.colors.black
              }
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.sm}
              pl="10"
            >
              Fragile
            </Text>
          </CategoryIcon>
          <CategoryIcon
            onPress={() => toggleCategoryFilter(category.ELECTRIC)}
            isSelected={categorySelected(category.ELECTRIC)}
          >
            <IconElectricCategory />
            <Text
              color={
                categorySelected(category.ELECTRIC)
                  ? theme.colors.white1
                  : theme.colors.black
              }
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.sm}
              pl="10"
            >
              Electric
            </Text>
          </CategoryIcon>
          <CategoryIcon
            onPress={() => toggleCategoryFilter(category.HEAVYMATERIAL)}
            isSelected={categorySelected(category.HEAVYMATERIAL)}
          >
            <IconHeavyMaterialsCategory />
            <Text
              color={
                categorySelected(category.HEAVYMATERIAL)
                  ? theme.colors.white1
                  : theme.colors.black
              }
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.sm}
              pl="10"
            >
              Heavy Material
            </Text>
          </CategoryIcon>
          <CategoryIcon
            onPress={() => toggleCategoryFilter(category.CHEMICAL)}
            isSelected={categorySelected(category.CHEMICAL)}
          >
            <IconChemicalCategory />
            <Text
              color={
                categorySelected(category.CHEMICAL)
                  ? theme.colors.white1
                  : theme.colors.black
              }
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.sm}
              pl="10"
            >
              Chemical
            </Text>
          </CategoryIcon>
        </CategoryContainer>
      </Container>
    </>
  )
}

export default Category
