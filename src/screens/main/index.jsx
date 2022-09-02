import { Image, ScrollView, StatusBar, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import routes from '../../constants/routes'

import Button from '../../components/button'
import Container from '../../components/container'
import Text from '../../components/text'

import MoreWarehouse from './more-warehouse'
import Featured from './main-featured'
import Place from './main-place'

import IconElectricCategory from '../../components/icons/icon-electric-category'

export function MainScreen({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container
          backgroundColor={theme.colors.grey2}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Text
            color={theme.colors.grey3}
            weight={theme.typography.weight.medium}
            size={theme.typography.tall.md}
          >
            Search Bar
          </Text>
        </Container>
        <Container>
          {/* Banner */}
          <Image
            source={require('../../assets/images/stashable-sale-banner.png')}
            style={{
              width: null,
              height: 120,
            }}
          ></Image>
        </Container>
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
      </ScrollView>
    </>
  )
}

export default MainScreen
