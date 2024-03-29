import { SafeAreaView } from 'react-native'

import { useMemo } from 'react'
import BaseText from '../../components/base-text'
import HorizontalCardItem from '../../components/horizontal-card-item'
import Loading from '../../components/loading'
import routes from '../../constants/routes'
import useWarehouse from '../../shared/useWarehouse'

const WarehouseItem = ({ item, onPress }) => {
  const keyedCategories = useMemo(
    () => item.relationships.categories.map(category => category.toLowerCase()),
    [item.relationships.categories]
  )

  const subtitle = `${item.relationships.address['city']}, ${item.relationships.address['province']}`

  return (
    <HorizontalCardItem
      title={item.attributes['name']}
      subtitle={subtitle}
      price={item.attributes['base_price']}
      priceLabel="Start From"
      imageURL={item.attributes['image_url']}
      categories={keyedCategories}
      onPress={onPress}
    />
  )
}

export function MoreWarehouse({ navigation }) {
  const { warehouses, loading } = useWarehouse(10)
  return (
    <>
      <BaseText semiBold tall xl mb={15}>
        More Warehouse
      </BaseText>
      <SafeAreaView>
        {loading && <Loading />}
        {!loading &&
          warehouses['items'].map(item => (
            <WarehouseItem
              key={item.attributes.id}
              item={item}
              onPress={() =>
                navigation.navigate(routes.warehousePageRoute, {
                  warehouseID: item.attributes.id,
                })
              }
            />
          ))}
      </SafeAreaView>
    </>
  )
}

export default MoreWarehouse
