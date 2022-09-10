import { useMemo } from 'react'
import { FlatList, Image, ScrollView, StatusBar, View } from 'react-native'

import routes from '../../constants/routes'

import Button from '../../components/button'
import Container from '../../components/container'
import BaseText from '../../components/base-text'
import HorizontalCardItem from '../../components/horizontal-card-item'
import styled from 'styled-components/native'

import HistoryDetail from './history-detail'

const sampleData = {
  total_items: 2,
  items: [
    {
      attributes: {
        id: 1,
        user_id: 1,
        warehouse_id: 1,
        room_id: 1,
        category_id: 1,
        image_urls: [
          'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1662385324/stashable/bBZXJIFicAWhCu.jpg.jpg',
          'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1662385324/stashable/mZexmjXfVtmHsi.jpg.jpg',
        ],
        name: 'Aqua Gelas Air 240 ML 12 dus isi 48',
        description:
          'Aqua Gelas Air Mineral (48 x 220ml)\n\nAir mineral berkualitas yang berasal dari sumber air pegunungan pilihan dan terlindungi. AQUA melindungi keseimbangan alami ekosistem sumber airnya sehingga kekayaan dan kealamian mineralnya terjaga.\n\nAQUA, kebaikan alam, kebaikan hidup.',
        weight: 5,
        width: 15,
        height: 30,
        length: 30,
        quantity: 12,
        paid_annually: true,
        type: 'self-service',
        status: 'unpaid',
        created_at: '2022-09-05T13:42:05Z',
        payment_due: '2023-09-05T13:42:05Z',
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
          street_name:
            'Perferendis voluptatem aut accusantium consequatur sit.',
          zip_code: 17318,
        },
        categories: ['Heavy Materials'],
      },
    },
    {
      attributes: {
        id: 2,
        user_id: 1,
        warehouse_id: 3,
        room_id: 1,
        category_id: 1,
        image_urls: [
          'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1662385769/stashable/laxEgElKrvCSTR.jpg.jpg',
          'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1662385771/stashable/PhNNgggDWnseuD.jpg.jpg',
        ],
        name: 'Aqua Gelas Air 240 ML 12 dus isi 48',
        description:
          'Aqua Gelas Air Mineral (48 x 220ml)\n\nAir mineral berkualitas yang berasal dari sumber air pegunungan pilihan dan terlindungi. AQUA melindungi keseimbangan alami ekosistem sumber airnya sehingga kekayaan dan kealamian mineralnya terjaga.\n\nAQUA, kebaikan alam, kebaikan hidup.',
        weight: 5,
        width: 15,
        height: 30,
        length: 30,
        quantity: 12,
        paid_annually: true,
        type: 'self-service',
        status: 'paid',
        created_at: '2022-09-05T13:49:31Z',
        payment_due: '2023-09-05T13:49:31Z',
      },
      relationships: {
        warehouse: {
          id: 3,
          address_id: 5,
          name: 'PT. optiorepellendus',
          image_url: 'https://source.unsplash.com/random/800x800',
          description:
            'Voluptatem aut perferendis consequatur accusantium sit. Perferendis consequatur aut voluptatem sit accusantium. Sit aut accusantium voluptatem perferendis consequatur. Voluptatem accusantium aut sit perferendis consequatur. Aut accusantium sit voluptatem consequatur perferendis. Aut voluptatem consequatur accusantium sit perferendis. Sit voluptatem perferendis consequatur accusantium aut. Voluptatem perferendis aut sit accusantium consequatur.',
          base_price: 24385992.147742342,
          email: 'PQBTxVv@AjYMHSm.info',
          phone_number: '104-581-7392',
          rooms_count: 0,
          created_at: '2022-08-30T16:25:59Z',
        },
        address: {
          id: 5,
          province: 'facere',
          city: 'unde',
          street_name:
            'Accusantium sit consequatur perferendis aut voluptatem.',
          zip_code: 17413,
        },
        categories: ['Heavy Materials', 'Chemical'],
      },
    },
  ],
}

const CoreHistoryCardItem = styled.Pressable`
  margin-bottom: 15px;
`

const HistoryCardItem = ({ item, onPress }) => {
  const keyedCategories = useMemo(
    () => item.relationships.categories.map(category => category.toLowerCase()),
    [item.relationships.categories]
  )

  const subtitle = `${item.relationships.address['city']}, ${item.relationships.address['province']}`

  return (
    <CoreHistoryCardItem onPress={onPress}>
      <HorizontalCardItem
        title={item.attributes['name']}
        subtitle={subtitle}
        price={item.relationships.warehouse['base_price']}
        priceLabel="Price For"
        imageURL={item.attributes['image_urls'][0]}
        categories={keyedCategories}
        status={item.attributes['status']}
      />
    </CoreHistoryCardItem>
  )
}

export function HistoryScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <HistoryCardItem
      key={item.attributes['id']}
      item={item}
      onPress={() => navigation.navigate(routes.historyDetailPageRoute)}
    />
  )

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <FlatList
          data={sampleData.items}
          renderItem={renderItem}
          keyExtractor={item => item.attributes['id']}
        />
      </Container>
    </>
  )
}

export default HistoryScreen
