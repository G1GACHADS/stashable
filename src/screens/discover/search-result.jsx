import { useMemo } from 'react'
import { FlatList, ScrollView } from 'react-native'
import styled from 'styled-components/native'

import routes from '../../constants/routes'

import BaseText from '../../components/base-text'
import FilterButton from '../../components/filter-button'
import HorizontalCardItem from '../../components/horizontal-card-item'

const SearchHeader = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

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

export function SearchResult({ query, results, navigation }) {
  const renderItem = ({ item }) => (
    <WarehouseItem
      key={item.attributes.id}
      item={item}
      onPress={() => {
        navigation.navigate(routes.warehousePageRoute, {
          warehouseID: item.attributes.id,
        })
      }}
    />
  )

  return (
    <>
      <SearchHeader>
        <BaseText semiBold tall xl mt={10} mb={10}>
          {query !== ''
            ? `Search result for "${query}"`
            : 'Explore our top picks'}
        </BaseText>
        <FilterButton />
      </SearchHeader>
      <ScrollView>
        <ScrollView horizontal>
          <FlatList
            data={results['items']}
            renderItem={renderItem}
            keyExtractor={item => item.attributes['id']}
            nestedScrollEnabled
          />
        </ScrollView>
      </ScrollView>
    </>
  )
}

export default SearchResult
