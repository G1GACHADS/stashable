import { ActivityIndicator, Image, ScrollView, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import routes from '../../constants/routes'
import { currencyFormatter } from '../../shared/currencyFormatter'
import useWarehouse from '../../shared/useWarehouse'

import Container from '../../components/container'
import BaseText from '../../components/base-text'

import IconFragileCategory from '../../components/icons/icon-fragile-category'
import IconElectricCategory from '../../components/icons/icon-electric-category'
import IconHeavyMaterialsCategory from '../../components/icons/icon-heavy-materials-category'
import IconChemicalCategory from '../../components/icons/icon-chemical-category'

const CoreFeaturedWarehouseCard = styled.Pressable`
  width: 175px;
  height: 254px;
  background-color: 'white';
  border-radius: 5;
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 10;
`

const CategoriesRow = styled.View`
  display: flex;
  flex-direction: row;
`

const CategoriesItem = styled.View`
  margin-right: 5px;
`

const FeaturedWarehouseCard = ({ theme, item, onPress }) => {
  const keyedCategories = item.relationships.categories.map(category =>
    category.toLowerCase()
  )

  const categoryIcons = keyedCategories.map(category => {
    if (category === 'fragile') {
      return <IconFragileCategory />
    }
    if (category === 'electric') {
      return <IconElectricCategory />
    }
    if (category === 'heavy materials') {
      return <IconHeavyMaterialsCategory />
    }
    return <IconChemicalCategory />
  })

  return (
    <CoreFeaturedWarehouseCard onPress={onPress}>
      <Image
        source={{ uri: item.attributes['image_url'] }}
        style={{
          width: null,
          height: 132,
          borderRadius: 5,
        }}
      />
      <BaseText medium tall lg mt={5}>
        {item.attributes.name}
      </BaseText>
      <BaseText color="grey3" regular tall sm>
        {`${item.relationships.address['city']}, ${item.relationships.address['province']}`}
      </BaseText>
      <CategoriesRow>
        {categoryIcons.map((icon, index) => (
          <CategoriesItem key={index}>{icon}</CategoriesItem>
        ))}
      </CategoriesRow>
      <BaseText medium tall sm>
        Start From
      </BaseText>
      <BaseText color="primary" semiBold tall lg>
        {currencyFormatter(item.attributes['base_price'])}/month
      </BaseText>
    </CoreFeaturedWarehouseCard>
  )
}

export function Featured({ navigation }) {
  const theme = useTheme()
  const { warehouses, isLoading } = useWarehouse(3)

  return (
    <>
      <Container>
        <BaseText semiBold tall xl>
          Featured Warehouse
        </BaseText>
      </Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 15 }}
      >
        {isLoading && <ActivityIndicator />}
        {!isLoading &&
          warehouses['items'].map(item => (
            <FeaturedWarehouseCard
              key={item.attributes.id}
              theme={theme}
              item={item}
              onPress={() =>
                navigation.navigate(routes.warehousePageRoute, {
                  warehouseID: item.attributes.id,
                })
              }
            />
          ))}
        <View style={{ paddingRight: 30 }}></View>
      </ScrollView>
    </>
  )
}

export default Featured
