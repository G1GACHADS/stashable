import { useState } from 'react'
import { ActivityIndicator, ScrollView, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { useDebounce } from 'use-debounce'

import Container from '../../components/container'
import IconSearch from '../../components/icons/icon-search'
import Search from '../../components/search'
import useWarehouseSearch from '../../shared/useWarehouseSearch'

import CategoryFilter from './category-filter'
import SearchResult from './search-result'

const CoreSearchInput = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  margin-bottom: 20px;
  border-radius: 44px;
  background-color: ${({ theme }) => theme.colors.white2};
`

const SearchInput = ({ query, setQuery }) => {
  return (
    <CoreSearchInput>
      <IconSearch />
      <Search
        placeholder="Search for a place..."
        value={query}
        onChangeText={newSearchQuery => setQuery(newSearchQuery)}
      />
    </CoreSearchInput>
  )
}

export function DiscoverScreen({ navigation }) {
  const [query, setQuery] = useState('')
  const [debouncedQuery] = useDebounce(query, 100)
  const { warehouses, isLoading } = useWarehouseSearch(debouncedQuery)

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>
          <SearchInput query={query} setQuery={setQuery} />
          <CategoryFilter navigation={navigation} />
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <SearchResult
              query={debouncedQuery}
              results={warehouses}
              navigation={navigation}
            />
          )}
        </Container>
      </ScrollView>
    </>
  )
}

export default DiscoverScreen
