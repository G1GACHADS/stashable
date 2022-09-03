import { useState } from 'react'
import { Image, ScrollView, StatusBar, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import routes from '../../constants/routes'

import Search from '../../components/search'
import Button from '../../components/button'
import Container from '../../components/container'

import IconSearch from '../../components/icons/icon-search'

import MoreWarehouse from './more-warehouse'
import Featured from './main-featured'
import Place from './main-place'

import IconElectricCategory from '../../components/icons/icon-electric-category'

export function MainScreen({ navigation }) {
  const theme = useTheme()
  const [search, setForm] = useState({
    // email: '',
    // password: '',
  })

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>

        <View 
          style={{
            display:'flex',
            flexDirection:'row',
            borderRadius: 44,
            paddingHorizontal:40,
            paddingVertical:12,
            justifyContent:'center',
            alignItems:'center',
            gap: 8,
            backgroundColor:theme.colors.white2,
            marginVertical: 38,
            
          }}
          >
          <IconSearch />
          <Search 
          placeholder="Search for a place..."
          />
        </View>
        {/* Banner */}
        <Image
          source={require('../../assets/images/stashable-sale-banner.png')}
          style={{
            width: null,
            height: 120,
            borderRadius:10,
          }}
        />
        {/* End Banner */}
        <Place navigation={navigation} />
        <Featured navigation={navigation} />
        <MoreWarehouse navigation={navigation} />

        <View style={{ alignItems: 'flex-end' }}>
          <Button
            sm
            title="Get Started"
            onPress={() => navigation.navigate(routes.loginRoute)}
            />
        </View>
        </Container>
      </ScrollView>
    </>
  )
}

export default MainScreen
