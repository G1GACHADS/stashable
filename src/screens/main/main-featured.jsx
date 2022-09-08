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
        padding: 10,
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
      <BaseText medium tall lg>
        {item.attributes.name}
      </BaseText>
      <BaseText color="grey3" regular tall sm>
        {`${item.relationships.address['city']}, ${item.relationships.address['province']}`}
      </BaseText>
      <View style={{ flexDirection: 'row' }}>{categoryIcons}</View>
      <BaseText medium tall sm>
        Start From
      </BaseText>
      <BaseText primary semiBold tall lg>
        Rp. {item.attributes.base_price}/month
      </BaseText>
    </View>
  )
}

export function Featured({ navigation }) {
  const theme = useTheme()
  const { warehouses, isLoading } = useWarehouse(3)

  return (
    <Container>
      {/* Featured Warehouse */}
      <BaseText semiBold tall xl>
        Featured Warehouse
      </BaseText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* <SafeAreaView> */}
        {isLoading && <ActivityIndicator />}
        {!isLoading &&
          warehouses['items'].map(item => (
            <FeaturedWarehouseCard
              key={item.attributes.id}
              theme={theme}
              item={item}
            />
          ))}
      </ScrollView>
    </Container>
    //   {/* End Of Featured Warehouse */}
  )
}

export default Featured
