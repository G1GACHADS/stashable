import { Image, ScrollView, StatusBar, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import Text from '../../components/text'

import IconFragileCategory from '../../components/icons/icon-fragile-category'
import IconElectricCategory from '../../components/icons/icon-electric-category'
import IconHeavyMaterialsCategory from '../../components/icons/icon-heavy-materials-category'
import IconChemicalCategory from '../../components/icons/icon-chemical-category'
import BaseText from '../../components/base-text'

const DATA = {
  total_items: 100,
  items: [
    {
      attributes: {
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
      relationships: {
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
        address_id: 4,
        name: 'PT. blanditiismaxime',
        image_url: 'https://source.unsplash.com/random/800x800',
        description:
          'Voluptatem sit consequatur perferendis aut accusantium. Voluptatem sit accusantium perferendis aut consequatur. Sit perferendis consequatur accusantium voluptatem aut. Voluptatem sit accusantium perferendis aut consequatur.',
        base_price: 21660308.322438713,
        email: 'dRFFEpa@LdhfvlR.org',
        phone_number: '107-286-9531',
        rooms_count: 0,
        created_at: '2022-08-30T16:25:59Z',
      },
      relationships: {
        address: {
          id: 4,
          province: 'nesciunt',
          city: 'ex',
          street_name:
            'Perferendis voluptatem consequatur accusantium aut sit.',
          zip_code: 17015,
        },
        categories: ['Fragile'],
      },
    },
    {
      attributes: {
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
      relationships: {
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

export function Featured({ navigation }) {
  const theme = useTheme()

  const FeaturedWarehouseCard = ({ item }) => {
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
          source={{ uri: item.attributes.image_url }}
          style={{
            width: null,
            height: 132,
          }}
        />
        <Text
          color={theme.colors.black}
          weight={theme.typography.weight.medium}
          size={theme.typography.tall.lg}
        >
          {item.attributes.name}
        </Text>
        <Text
          color={theme.colors.grey3}
          weight={theme.typography.weight.regular}
          size={theme.typography.tall.sm}
        >
          {`${item.relationships.address['city']}, ${item.relationships.address['province']}`}
        </Text>
        <View style={{ flexDirection: 'row' }}>{categoryIcons}</View>
        <Text
          color={theme.colors.black}
          weight={theme.typography.weight.medium}
          size={theme.typography.tall.sm}
        >
          Start From
        </Text>
        <Text
          color={theme.colors.primary}
          weight={theme.typography.weight.semiBold}
          size={theme.typography.tall.lg}
        >
          Rp. {item.attributes.base_price}/month
        </Text>
      </View>
    )
  }

  return (
    <Container>
      {/* Featured Warehouse */}
      <Text
        color={theme.colors.black}
        weight={theme.typography.weight.semiBold}
        size={theme.typography.tall.xl}
      >
        Featured Warehouse
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* <SafeAreaView> */}
        {DATA.items.map(item => (
          <FeaturedWarehouseCard key={item.attributes.id} item={item} />
        ))}
      </ScrollView>
    </Container>
    //   {/* End Of Featured Warehouse */}
  )
}

export default Featured
