import { Image, ScrollView, StatusBar } from 'react-native'

import BaseText from '../../components/base-text'
import Container from '../../components/container'

import Details from './details'
import AvailableRooms from './available-rooms'
import useWarehouseDetail from '../../shared/useWarehouseDetail'

export function WarehouseScreen({ route, navigation }) {
  const { warehouse, isLoading } = useWarehouseDetail(route.params.warehouseID)

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        {!isLoading && (
          <Image
            source={{ uri: warehouse.attributes['image_url'] }}
            style={{
              width: null,
              height: 360,
            }}
          />
        )}
        <Container>
          {!isLoading && (
            <>
              <BaseText semiBold grande sm>
                {warehouse.attributes.name}
              </BaseText>
              <BaseText color="grey3" regular tall md>
                {warehouse.relationships.address['street_name']},{' '}
                {warehouse.relationships.address['zip_code']}
              </BaseText>
              <BaseText color="grey3" regular tall md>
                {warehouse.relationships.address['city']},{' '}
                {warehouse.relationships.address['province']}
              </BaseText>
              <Details
                isLoading={isLoading}
                warehouse={warehouse}
                navigation={navigation}
              />
              <AvailableRooms
                isLoading={isLoading}
                rooms={warehouse.relationships.rooms}
                categories={warehouse.relationships.categories}
                navigation={navigation}
              />
            </>
          )}
        </Container>
      </ScrollView>
    </>
  )
}

export default WarehouseScreen
