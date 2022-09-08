import { useMemo } from 'react'
import { ActivityIndicator, SafeAreaView } from 'react-native'

import BaseText from '../../components/base-text'
import HorizontalCardItem from '../../components/horizontal-card-item'

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

export function AvailableRooms({ isLoading, rooms, categories, navigation }) {
  return (
    <>
      <BaseText semiBold tall lg mb={15}>
        Select Available Room
      </BaseText>
      <SafeAreaView>
        {isLoading && <ActivityIndicator />}
        {!isLoading &&
          rooms.map(room => (
            <WarehouseItem
              key={room.id}
              item={{ room, categories }}
              onPress={() => {}}
            />
          ))}
      </SafeAreaView>
    </>
  )
}

export default AvailableRooms
