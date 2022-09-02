import { Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import Text from '../../components/text'

import routes from '../../constants/routes'

import Details from './details'

export function WarehouseScreen({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Image
          source={require('../../assets/images/warehouse-image.png')}
          style={{
            width: null,
            height: 360,
          }}
        />
        <Container>
          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.grande.sm}
            mb="5"
          >
            Luntia Warehouse
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.loginRoute)}
            // route to google maps
          >
            <Text
              color={theme.colors.grey3}
              weight={theme.typography.weight.regular}
              size={theme.typography.tall.md}
              mb="5"
            >
              Pademangan, Jakarta Selatan
            </Text>
            <Text
              color={theme.colors.grey3}
              weight={theme.typography.weight.regular}
              size={theme.typography.tall.md}
              mb="5"
            >
              Jalan Sebrang
            </Text>
          </TouchableOpacity>
          <Details navigation={navigation} />
        </Container>
      </ScrollView>
    </>
  )
}

export default WarehouseScreen
