import { Image, ScrollView, StatusBar } from 'react-native'

import BaseText from '../../components/base-text'
import Container from '../../components/container'

import useWarehouseDetail from '../../shared/useWarehouseDetail'
import AvailableRooms from './available-rooms'
import Details from './details'

export function WarehouseScreen({ route, navigation }) {
  const { warehouse, loading } = useWarehouseDetail(route.params.warehouseID)

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        {!loading && (
          <Image
            source={{ uri: warehouse.attributes['image_url'] }}
            style={{
              width: null,
              height: 360,
            }}
          />
        )}
        <Container>
          {!loading && (
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
                loading={loading}
                warehouse={warehouse}
                navigation={navigation}
              />
              <AvailableRooms
                loading={loading}
                warehouse={warehouse}
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
