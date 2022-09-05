import { useState } from 'react'
import { Image, ScrollView, StatusBar, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import Search from '../../components/search'
import Container from '../../components/container'
import IconSearch from '../../components/icons/icon-search'

import MoreWarehouse from './more-warehouse'
import Featured from './main-featured'
import Place from './main-place'

export function MainScreen({ navigation }) {
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
              gap: 8,
              backgroundColor: theme.colors.white2,
              marginVertical: 38,
            }}
          >
            <IconSearch />
            <Search
              value={search.keyname}
              placeholder="Search for a place..."
              onChangeText={keyname => setForm({ ...search, keyname })}
            />
          </View>
          {/* Banner */}
          <Image
            source={require('../../assets/images/stashable-sale-banner.png')}
            style={{
              width: null,
              height: 120,
              borderRadius: 10,
            }}
          />
          {/* End Banner */}
          <Place navigation={navigation} />
        </Container>
        <Featured navigation={navigation} />
        <Container>
          <MoreWarehouse navigation={navigation} />
        </Container>
      </ScrollView>
    </>
  )
}

export default MainScreen
