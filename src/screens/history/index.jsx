import { useMemo } from 'react'
import { FlatList, RefreshControl, ScrollView, StatusBar } from 'react-native'

import routes from '../../constants/routes'

import useRentalHistory from '../../shared/useRentalHistory'

import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import Container from '../../components/container'
import HorizontalCardItem from '../../components/horizontal-card-item'
import Loading from '../../components/loading'

const HistoryCardItem = ({ item, onPress }) => {
  const keyedCategories = useMemo(
    () => item.relationships.categories.map(category => category.toLowerCase()),
    [item.relationships.categories]
  )

  const subtitle = `${item.relationships.address['city']}, ${item.relationships.address['province']}`

  return (
    <HorizontalCardItem
      onPress={onPress}
      title={item.attributes['name']}
      subtitle={subtitle}
      price={
        item.attributes['paid_annually']
          ? item.relationships.warehouse['base_price'] * 12
          : item.relationships.warehouse['base_price']
      }
      priceLabel="Price For"
      imageURL={item.attributes['image_urls'][0]}
      categories={keyedCategories}
      paidAnnually={item.attributes['paid_annually']}
      status={item.attributes['status']}
    />
  )
}

export function HistoryScreen({ navigation }) {
  const { rentals, loading, refreshControl, setRefreshControl } =
    useRentalHistory()

  useFocusEffect(
    useCallback(() => {
      setRefreshControl(true)

      return () => {
        setRefreshControl(false)
      }
    }, [])
  )

  const renderItem = ({ item }) => (
    <HistoryCardItem
      key={item.attributes['id']}
      item={item}
      onPress={() =>
        navigation.navigate(routes.historyDetailPageRoute, {
          rentalID: item.attributes['id'],
        })
      }
    />
  )

  const reloadData = () => {
    setRefreshControl(!refreshControl)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        {loading && <Loading />}
        {!loading && (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={reloadData} />
            }
          >
            <ScrollView horizontal>
              <FlatList
                data={rentals.items}
                renderItem={renderItem}
                keyExtractor={item => item.attributes['id']}
                nestedScrollEnabled
              />
            </ScrollView>
          </ScrollView>
        )}
      </Container>
    </>
  )
}

export default HistoryScreen
