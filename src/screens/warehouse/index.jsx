import {
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native'
import { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import Text from '../../components/text'

import routes from '../../constants/routes'

import Details from './details'
import SelectRoom from './room'

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
          <View>
            <Text
              color={theme.colors.black}
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.lg}
            >
              Select Plan
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View
                backgroundColor={theme.colors.white1}
                borderColor={theme.colors.grey2}
                style={{
                  width: '48%',
                  height: 80,
                  borderWidth: 2,
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View //Radio Button
                  backgroundColor={theme.colors.white1}
                  borderColor={theme.colors.grey2}
                  style={{
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderRadius: 100,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                ></View>
                <View>
                  <Text
                    // style={{
                    //   borderWidth: 2,
                    //   height: 22
                    // }}
                    color={theme.colors.black}
                    weight={theme.typography.weight.semiBold}
                    size={theme.typography.tall.lg}
                  >
                    Monthly Price
                  </Text>
                  <Text
                    color={theme.colors.primary}
                    weight={theme.typography.weight.semiBold}
                    size={theme.typography.tall.lg}
                  >
                    Rp. 5.000.000
                  </Text>
                </View>
              </View>
              <View
                backgroundColor={theme.colors.white1}
                borderColor={theme.colors.primary}
                style={{
                  width: '48%',
                  height: 80,
                  borderWidth: 2,
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View //Radio Button
                  backgroundColor={theme.colors.primary}
                  borderColor={theme.colors.primary}
                  style={{
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderRadius: 100,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                ></View>
                <View>
                  <Text
                    // style={{
                    //   borderWidth: 2,
                    //   height: 22
                    // }}
                    color={theme.colors.black}
                    weight={theme.typography.weight.semiBold}
                    size={theme.typography.tall.lg}
                  >
                    Yearly Price
                  </Text>
                  <Text
                    color={theme.colors.primary}
                    weight={theme.typography.weight.semiBold}
                    size={theme.typography.tall.lg}
                  >
                    Rp. 60.000.000
                  </Text>
                </View>
              </View>
            </View>
          </View>
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
