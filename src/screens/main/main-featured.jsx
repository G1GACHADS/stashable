import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  View,
} from 'react-native'
import { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import Text from '../../components/text'

import IconFragileCategory from '../../components/icons/icon-fragile-category'
import IconElectricCategory from '../../components/icons/icon-electric-category'
import IconHeavyMaterialsCategory from '../../components/icons/icon-heavy-materials-category'
import IconChemicalCategory from '../../components/icons/icon-chemical-category'
import BaseText from '../../components/base-text'
import useWarehouse from '../../shared/useWarehouse'
import { currencyFormatter } from '../../shared/currencyFormatter'

const FeaturedWarehouseCard = ({ theme, item }) => {
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
    <View
      style={{
        width: 175,
        height: 254,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
      }}
    >
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
      <View style={{ flexDirection: 'row' }}>{categoryIcons}</View>
      <BaseText medium tall sm>
        Start From
      </BaseText>
      <BaseText color="primary" semiBold tall lg>
        {currencyFormatter(item.attributes['base_price'])}/month
      </BaseText>
    </View>
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
            />
          ))}
        <View style={{ paddingRight: 30 }}></View>
      </ScrollView>
    </>
  )
}

export default Featured
