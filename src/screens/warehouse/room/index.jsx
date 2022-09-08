import { StatusBar, ScrollView, View, Image } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import BaseText from '../../../components/base-text'
import Button from '../../../components/button'
import Container from '../../../components/container'

import IconChemical from '../../../components/icons/icon-chemical'
import IconElectric from '../../../components/icons/icon-electric'
import IconFragile from '../../../components/icons/icon-fragile'
import IconHeavyMaterial from '../../../components/icons/icon-heavymaterial'
import SelectPlan from './select-plan'

const sampleData = {
  attributes: {
    id: 2,
    warehouse_id: 1,
    image_url: 'https://source.unsplash.com/random/800x800',
    name: 'omnis',
    width: 20.770103454589844,
    height: 18.005279541015625,
    length: 32.20661926269531,
    price: 51.278873443603516,
  },
  relationships: {
    warehouse: {
      id: 1,
      address_id: 2,
      name: 'PT. providentdolor',
      image_url: 'https://source.unsplash.com/random/800x800',
      description:
        'Voluptatem accusantium aut sit consequatur perferendis. Aut consequatur accusantium sit perferendis voluptatem. Sit consequatur aut voluptatem perferendis accusantium. Accusantium consequatur sit perferendis voluptatem aut. Sit accusantium aut consequatur perferendis voluptatem. Consequatur voluptatem aut sit perferendis accusantium. Consequatur sit aut voluptatem accusantium perferendis.',
      base_price: 10731009.92736739,
      email: 'svxuaWH@UgARTVI.net',
      phone_number: '451-710-3892',
      rooms_count: 0,
      created_at: '2022-08-30T16:25:59Z',
    },
    address: {
      id: 2,
      province: 'itaque',
      city: 'expedita',
      street_name: 'Perferendis voluptatem aut accusantium consequatur sit.',
      zip_code: 17318,
    },
    categories: ['Heavy Materials'],
  },
}

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
  border: 1px solid black;
  border-radius: 5px;
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
    <BaseText semiBold tall md>
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

export function RoomDetailScreen({ navigation }) {
  const theme = useTheme()

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Image
          source={require('../../../assets/images/getting-started-banner.png')}
          style={{
            width: null,
            height: 400,
          }}
        />
        <Container>
          <RoomDetailHeader
            name={sampleData.attributes.name}
            address={sampleData.relationships.address}
          />
          <RoomDetailSupportedCategories
            categories={sampleData.relationships.categories}
          />
          <RoomDetailSize
            length={sampleData.attributes.length}
            height={sampleData.attributes.height}
            width={sampleData.attributes.width}
          />
          <SelectPlan basePrice={5000000} />
          <Button sm title="Checkout" />
        </Container>
      </ScrollView>
    </>
  )
}

export default RoomDetailScreen
