import { FlatList, SafeAreaView, Pressable } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import BaseText from '../../components/base-text'
import HorizontalCardItem from '../../components/horizontal-card-item'
import { useMemo } from 'react'

const sampleData = {
  total_items: 101,
  items: [
    {
      attributes: {
        id: 1,
        address_id: 2,
        name: 'PT. Gudangku',
        image_url:
          'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1661785738/stashable/ZJLpGVqdpuyTUC.jpg.jpg',
        description:
          'DIJUAL CEPAT GUDANG Lokasi : Cikarang - Bekasi 17145 Spesifikasi : Gudang + Office + Ruang Produksi LT : 2.760m2 LB: 2.200 m2 Surat : HGB Kawasan Industri Delta Silikon Listrik : 16.500 Watt Bekas distributor pelumas Price IDR 27 M ( Negotiable ) * Terima Jual - Beli - Sewa Properti ( Rumah - Tanah Kavling - Gudang - Gedung - Dsb ) * Heru Hermawan / AnRe 081295700xxx C21 Zawa PIK',
        base_price: 400000,
        email: 'ptgudangku@gmail.com',
        phone_number: '081295700856',
        rooms_count: 0,
        created_at: '2022-08-29T06:54:13Z',
      },
      relationships: {
        address: {
          id: 2,
          province: 'Jawa Barat',
          city: 'Bekasi',
          street_name: 'jl. situ',
          zip_code: 17145,
        },
        categories: ['Chemical', 'Heavy Material'],
      },
    },
    {
      attributes: {
        id: 2,
        address_id: 3,
        name: 'PT. a',
        image_url:
          'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1661785738/stashable/ZJLpGVqdpuyTUC.jpg.jpg',
        description:
          'DIJUAL CEPAT GUDANG Lokasi : Cikarang - Bekasi 17145 Spesifikasi : Gudang + Office + Ruang Produksi LT : 2.760m2 LB: 2.200 m2 Surat : HGB Kawasan Industri Delta Silikon Listrik : 16.500 Watt Bekas distributor pelumas Price IDR 27 M ( Negotiable ) * Terima Jual - Beli - Sewa Properti ( Rumah - Tanah Kavling - Gudang - Gedung - Dsb ) * Heru Hermawan / AnRe 081295700xxx C21 Zawa PIK',
        base_price: 400000,
        email: 'ptgudangku@gmail.com',
        phone_number: '081295700856',
        rooms_count: 0,
        created_at: '2022-08-29T06:56:01Z',
      },
      relationships: {
        address: {
          id: 3,
          province: 'Jawa Barat',
          city: 'Bekasi',
          street_name: 'jl. situ',
          zip_code: 17145,
        },
        categories: ['Heavy Material', 'Chemical'],
      },
    },
    {
      attributes: {
        id: 3,
        address_id: 4,
        name: 'PT. b',
        image_url:
          'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1661785738/stashable/ZJLpGVqdpuyTUC.jpg.jpg',
        description:
          'DIJUAL CEPAT GUDANG Lokasi : Cikarang - Bekasi 17145 Spesifikasi : Gudang + Office + Ruang Produksi LT : 2.760m2 LB: 2.200 m2 Surat : HGB Kawasan Industri Delta Silikon Listrik : 16.500 Watt Bekas distributor pelumas Price IDR 27 M ( Negotiable ) * Terima Jual - Beli - Sewa Properti ( Rumah - Tanah Kavling - Gudang - Gedung - Dsb ) * Heru Hermawan / AnRe 081295700xxx C21 Zawa PIK',
        base_price: 400000,
        email: 'ptgudangku@gmail.com',
        phone_number: '081295700856',
        rooms_count: 0,
        created_at: '2022-08-29T06:56:04Z',
      },
      relationships: {
        address: {
          id: 4,
          province: 'Jawa Barat',
          city: 'Bekasi',
          street_name: 'jl. situ',
          zip_code: 17145,
        },
        categories: ['Heavy Material', 'Chemical'],
      },
    },
    {
      attributes: {
        id: 4,
        address_id: 5,
        name: 'PT. 1661756309',
        image_url:
          'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1661785738/stashable/ZJLpGVqdpuyTUC.jpg.jpg',
        description:
          'DIJUAL CEPAT GUDANG Lokasi : Cikarang - Bekasi 17145 Spesifikasi : Gudang + Office + Ruang Produksi LT : 2.760m2 LB: 2.200 m2 Surat : HGB Kawasan Industri Delta Silikon Listrik : 16.500 Watt Bekas distributor pelumas Price IDR 27 M ( Negotiable ) * Terima Jual - Beli - Sewa Properti ( Rumah - Tanah Kavling - Gudang - Gedung - Dsb ) * Heru Hermawan / AnRe 081295700xxx C21 Zawa PIK',
        base_price: 400000,
        email: 'ptgudangku@gmail.com',
        phone_number: '081295700856',
        rooms_count: 0,
        created_at: '2022-08-29T06:58:29Z',
      },
      relationships: {
        address: {
          id: 5,
          province: 'Jawa Barat',
          city: 'Bekasi',
          street_name: 'jl. situ',
          zip_code: 17145,
        },
        categories: ['Heavy Material', 'Chemical'],
      },
    },
    {
      attributes: {
        id: 5,
        address_id: 6,
        name: 'PT. 1661756309',
        image_url:
          'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1661785738/stashable/ZJLpGVqdpuyTUC.jpg.jpg',
        description:
          'DIJUAL CEPAT GUDANG Lokasi : Cikarang - Bekasi 17145 Spesifikasi : Gudang + Office + Ruang Produksi LT : 2.760m2 LB: 2.200 m2 Surat : HGB Kawasan Industri Delta Silikon Listrik : 16.500 Watt Bekas distributor pelumas Price IDR 27 M ( Negotiable ) * Terima Jual - Beli - Sewa Properti ( Rumah - Tanah Kavling - Gudang - Gedung - Dsb ) * Heru Hermawan / AnRe 081295700xxx C21 Zawa PIK',
        base_price: 400000,
        email: 'ptgudangku@gmail.com',
        phone_number: '081295700856',
        rooms_count: 0,
        created_at: '2022-08-29T06:58:29Z',
      },
      relationships: {
        address: {
          id: 6,
          province: 'Jawa Barat',
          city: 'Bekasi',
          street_name: 'jl. situ',
          zip_code: 17145,
        },
        categories: ['Heavy Material', 'Chemical'],
      },
    },
  ],
}

const CoreWarehouseItem = styled.Pressable`
  margin-bottom: 15px;
`

const WarehouseItem = ({ item, onPress }) => {
  const keyedCategories = useMemo(
    () => item.relationships.categories.map(category => category.toLowerCase()),
    [item.relationships.categories]
  )

  const subtitle = `${item.relationships.address['city']}, ${item.relationships.address['province']}`

  return (
    <CoreWarehouseItem onPress={onPress}>
      <HorizontalCardItem
        title={item.attributes['name']}
        subtitle={subtitle}
        price={item.attributes['base_price']}
        priceLabel="Start From"
        imageURL={item.attributes['image_url']}
        categories={keyedCategories}
      />
    </CoreWarehouseItem>
  )
}

export function MoreWarehouse({ navigation }) {
  return (
    <>
      <BaseText semiBold tall xl mb={15}>
        More Warehouse
      </BaseText>
      <SafeAreaView>
        {sampleData['items'].map(item => (
          <WarehouseItem
            key={item.attributes.id}
            item={item}
            onPress={() => {}}
          />
        ))}
      </SafeAreaView>
    </>
  )
}

export default MoreWarehouse
