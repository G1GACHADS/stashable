import { useState } from 'react'
import { Image, ScrollView, StatusBar } from 'react-native'
import styled from 'styled-components/native'

import Container from '../../components/container'
import IconSearch from '../../components/icons/icon-search'
import Search from '../../components/search'
import routes from '../../constants/routes'

import Featured from './main-featured'
import Place from './main-place'
import MoreWarehouse from './more-warehouse'
// import useAuthStore from '../../store/useAuthStore'

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

const SearchInput = ({ navigation, query, setQuery }) => (
  <CoreSearchInput>
    <IconSearch />
    <Search
      value={query}
      placeholder="Search for a place..."
      onChangeText={query => setQuery(query)}
      onSubmitEditing={() =>
        navigation.navigate(routes.discoverPageRoute, { query })
      }
    />
  </CoreSearchInput>
)

export function MainScreen({ navigation }) {
  const [query, setQuery] = useState('')

  // const { logoutUser } = useAuthStore()
  // logoutUser()

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>
          <SearchInput
            navigation={navigation}
            query={query}
            setQuery={setQuery}
          />
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
