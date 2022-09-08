import { useState } from 'react'
import { Image, ScrollView, StatusBar, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import Search from '../../components/search'
import Container from '../../components/container'
import IconSearch from '../../components/icons/icon-search'

import Category from './category'
import SearchResult from './search-result'

export function DiscoverScreen({ navigation }) {
  const theme = useTheme()
  const [search, setForm] = useState({
    keyname: '',
  })

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderRadius: 44,
              paddingHorizontal: 40,
              paddingVertical: 12,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors.white2,
              marginBottom: 20,
            }}
          >
            <IconSearch />
            <Search
              value={search.keyname}
              placeholder="Search for a place..."
              onChangeText={keyname => setForm({ ...search, keyname })}
            />
          </View>
          <Category navigation={navigation} />
          <SearchResult navigation={navigation} />
        </Container>
      </ScrollView>
    </>
  )
}

export default DiscoverScreen
