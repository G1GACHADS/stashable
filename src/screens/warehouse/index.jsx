import {
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native'
import { useTheme } from 'styled-components/native'
import BaseText from '../../components/base-text'

import Container from '../../components/container'
import Text from '../../components/text'

import routes from '../../constants/routes'

import Details from './details'
import SelectRoom from './room'
import SelectPlanSection from './select-plan'

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
          <Text //Warehouse Name
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.grande.sm}
          >
            Luntia Warehouse
          </Text>

          <Text //Warehouse Address 1
            color={theme.colors.grey3}
            weight={theme.typography.weight.regular}
            size={theme.typography.tall.md}
          >
            Jalan, Situ No.14 RT:01 RW:02, 17145
          </Text>
          <Text //Warehouse Address 2
            color={theme.colors.grey3}
            weight={theme.typography.weight.regular}
            size={theme.typography.tall.md}
          >
            Pademangan, Jakarta Selatan
          </Text>

          <Details navigation={navigation} />
          <SelectRoom navigation={navigation} />
          <SelectPlanSection basePrice={5000000} />

          <View
            backgroundColor={theme.colors.primary}
            style={{
              width: 100,
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              color={theme.colors.white1}
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.lg}
            >
              Checkout
            </Text>
          </View>
        </Container>
      </ScrollView>
    </>
  )
}

export default WarehouseScreen
