import { useMemo, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StatusBar,
} from 'react-native'
import styled from 'styled-components/native'

import routes from '../../constants/routes'

import useRentalHistory from '../../shared/useRentalHistory'

import Container from '../../components/container'
import HorizontalCardItem from '../../components/horizontal-card-item'

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
  const { rentals, isLoading, refreshControl, setRefreshControl } =
    useRentalHistory()

  const renderItem = ({ item }) => (
    <HistoryCardItem
      key={item.attributes['id']}
      item={item}
      onPress={() => navigation.navigate(routes.historyDetailPageRoute)}
    />
  )

  const reloadData = () => {
    setRefreshControl(!refreshControl)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        {isLoading && <ActivityIndicator />}
        {!isLoading && (
          <FlatList
            data={rentals.items}
            renderItem={renderItem}
            keyExtractor={item => item.attributes['id']}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={reloadData} />
            }
          />
        )}
      </Container>
    </>
  )
}

export default HistoryScreen
