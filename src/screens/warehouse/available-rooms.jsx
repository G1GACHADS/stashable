import { useMemo } from 'react'
import { SafeAreaView } from 'react-native'

import routes from '../../constants/routes'

import BaseText from '../../components/base-text'
import HorizontalCardItem from '../../components/horizontal-card-item'
import Loading from '../../components/loading'

const WarehouseItem = ({ item, onPress }) => {
  const { room, categories } = item

  const keyedCategories = useMemo(
    () => categories.map(category => category.toLowerCase()),
    [categories]
  )

  const subtitle = `${room['length']} meter x ${room['width']} meter x ${room['height']} meter`

  return (
    <HorizontalCardItem
      title={room['name']}
      subtitle={subtitle}
      price={room['price']}
      priceLabel="Price For"
      imageURL={room['image_url']}
      categories={keyedCategories}
      onPress={onPress}
    />
  )
}

export function AvailableRooms({ loading, warehouse, navigation }) {
  const rooms = warehouse.relationships['rooms']
  const categories = warehouse.relationships['categories']

  return (
    <>
      <BaseText semiBold tall xl mb={15}>
        Select Available Room
      </BaseText>
      <SafeAreaView>
        {loading && <Loading />}
        {!loading &&
          rooms.map(room => (
            <WarehouseItem
              key={room.id}
              item={{ room, categories }}
              onPress={() =>
                navigation.navigate(routes.warehouseRoomDetailPageRoute, {
                  warehouse,
                  roomID: room.id,
                })
              }
            />
          ))}
      </SafeAreaView>
    </>
  )
}

export default AvailableRooms
