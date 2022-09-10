import { useState } from 'react'
import {
  StatusBar,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
} from 'react-native'
import styled from 'styled-components/native'

import SelectPlan from './select-plan'

import routes from '../../../constants/routes'
import plans from '../../../constants/plans'

import useWarehouseRoomDetail from '../../../shared/useWarehouseRoomDetail'

import BaseText from '../../../components/base-text'
import Button from '../../../components/button'
import Container from '../../../components/container'

import IconChemical from '../../../components/icons/icon-chemical'
import IconElectric from '../../../components/icons/icon-electric'
import IconFragile from '../../../components/icons/icon-fragile'
import IconHeavyMaterial from '../../../components/icons/icon-heavymaterial'

const RoomDetailHeader = ({ name, address }) => (
  <View style={{ marginBottom: 20 }}>
    <BaseText semiBold grande md>
      {name}
    </BaseText>
    <BaseText color="grey3" regular tall md>
      {address['street_name']}
    </BaseText>
    <BaseText color="grey3" regular tall md>
      {`${address['city']}, ${address['province']}`}
    </BaseText>
  </View>
)

const CategoryContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const CategoryIcon = styled.View`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  margin-bottom: 15px;
  margin-right: 15px;
`

const RoomDetailSupportedCategories = ({ categories }) => (
  <CategoryContainer>
    {categories.includes('Fragile') && (
      <CategoryIcon>
        <IconFragile />
      </CategoryIcon>
    )}
    {categories.includes('Electric') && (
      <CategoryIcon>
        <IconElectric />
      </CategoryIcon>
    )}
    {categories.includes('Heavy Materials') && (
      <CategoryIcon>
        <IconHeavyMaterial />
      </CategoryIcon>
    )}
    {categories.includes('Chemical') && (
      <CategoryIcon>
        <IconChemical />
      </CategoryIcon>
    )}
  </CategoryContainer>
)

const RoomDetailSizeDescription = styled.View`
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
`

const RoomDetailSize = ({ length, width, height }) => (
  <View style={{ marginBottom: 20 }}>
    <BaseText semiBold tall xl>
      Room Size
    </BaseText>
    <RoomDetailSizeDescription>
      <BaseText color="grey3" regular tall md>
        Length: {length} cm
      </BaseText>
      <BaseText color="grey3" regular tall md>
        Width: {width} cm
      </BaseText>
      <BaseText color="grey3" regular tall md>
        Height: {height} cm
      </BaseText>
    </RoomDetailSizeDescription>
  </View>
)

export function RoomDetailScreen({ route, navigation }) {
  const { warehouse, roomID } = route.params
  const { room, isLoading } = useWarehouseRoomDetail(
    warehouse.attributes['id'],
    roomID
  )

  const [selectedPlan, setSelectedPlan] = useState(plans.MONTHLY)

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        {isLoading && <ActivityIndicator />}
        {!isLoading && (
          <Image
            source={{ uri: room.attributes.image_url }}
            style={{
              width: null,
              height: 400,
            }}
          />
        )}
        <Container>
          {isLoading && <ActivityIndicator />}
          {!isLoading && (
            <>
              <RoomDetailHeader
                name={room.attributes.name}
                address={room.relationships.address}
              />
              <RoomDetailSupportedCategories
                categories={room.relationships.categories}
              />
              <RoomDetailSize
                length={room.attributes.length}
                height={room.attributes.height}
                width={room.attributes.width}
              />
              <SelectPlan
                basePrice={room.attributes.price}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
            </>
          )}
          <Button
            sm
            title="Checkout"
            onPress={() =>
              navigation.navigate(routes.warehouseCheckoutPageRoute, {
                warehouse,
                room,
                isPaidAnnually: selectedPlan === plans.YEARLY,
                totalFee:
                  selectedPlan === plans.YEARLY
                    ? room.attributes.price * 12
                    : room.attributes.price,
              })
            }
          />
        </Container>
      </ScrollView>
    </>
  )
}

export default RoomDetailScreen
