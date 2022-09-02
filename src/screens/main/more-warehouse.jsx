import { Image, ScrollView, StatusBar, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import routes from '../../constants/routes'

import Button from '../../components/button'
import Container from '../../components/container'
import Text from '../../components/text'

import IconElectricCategory from '../../components/icons/icon-electric-category'

export function MoreWarehouse({ navigation }) {
  const theme = useTheme()
  return (
    <Container style={{ gap: 15 }}>
      {/* Start Of More Warehouse */}
      <Text
        color={theme.colors.black}
        weight={theme.typography.weight.semiBold}
        size={theme.typography.tall.xl}
      >
        More Warehouse
      </Text>
      <View
        style={{
          width: null,
          height: 114,
          backgroundColor: 'white',
          padding: 10,
        }}
      >
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Image
            source={require('../../assets/images/warehouse-banner.png')}
            style={{
              width: 94,
              height: 94,
            }}
          ></Image>
          <View>
            <Text
              color={theme.colors.black}
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.lg}
            >
              Luntia Warehouse
            </Text>
            <Text
              color={theme.colors.grey3}
              weight={theme.typography.weight.regular}
              size={theme.typography.tall.sm}
            >
              Pademangan, Jakarta Utara
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <IconElectricCategory />
              <IconElectricCategory />
              <IconElectricCategory />
              <IconElectricCategory />
            </View>
            <Text
              color={theme.colors.black}
              weight={theme.typography.weight.medium}
              size={theme.typography.tall.sm}
            >
              Start From
            </Text>
            <Text
              color={theme.colors.primary}
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.lg}
            >
              Rp. 5.000.000/month
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: null,
          height: 114,
          backgroundColor: 'white',
          padding: 10,
        }}
      >
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Image
            source={require('../../assets/images/warehouse-banner.png')}
            style={{
              width: 94,
              height: 94,
            }}
          ></Image>
          <View>
            <Text
              color={theme.colors.black}
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.lg}
            >
              Luntia Warehouse
            </Text>
            <Text
              color={theme.colors.grey3}
              weight={theme.typography.weight.regular}
              size={theme.typography.tall.sm}
            >
              Pademangan, Jakarta Utara
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <IconElectricCategory />
              <IconElectricCategory />
              <IconElectricCategory />
              <IconElectricCategory />
            </View>
            <Text
              color={theme.colors.black}
              weight={theme.typography.weight.medium}
              size={theme.typography.tall.sm}
            >
              Start From
            </Text>
            <Text
              color={theme.colors.primary}
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.lg}
            >
              Rp. 5.000.000/month
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: null,
          height: 114,
          backgroundColor: 'white',
          padding: 10,
        }}
      >
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Image
            source={require('../../assets/images/warehouse-banner.png')}
            style={{
              width: 94,
              height: 94,
            }}
          ></Image>
          <View>
            <Text
              color={theme.colors.black}
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.lg}
            >
              Luntia Warehouse
            </Text>
            <Text
              color={theme.colors.grey3}
              weight={theme.typography.weight.regular}
              size={theme.typography.tall.sm}
            >
              Pademangan, Jakarta Utara
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <IconElectricCategory />
              <IconElectricCategory />
              <IconElectricCategory />
              <IconElectricCategory />
            </View>
            <Text
              color={theme.colors.black}
              weight={theme.typography.weight.medium}
              size={theme.typography.tall.sm}
            >
              Start From
            </Text>
            <Text
              color={theme.colors.primary}
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.lg}
            >
              Rp. 5.000.000/month
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: null,
          height: 114,
          backgroundColor: 'white',
          padding: 10,
        }}
      >
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Image
            source={require('../../assets/images/warehouse-banner.png')}
            style={{
              width: 94,
              height: 94,
            }}
          ></Image>
          <View>
            <Text
              color={theme.colors.black}
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.lg}
            >
              Luntia Warehouse
            </Text>
            <Text
              color={theme.colors.grey3}
              weight={theme.typography.weight.regular}
              size={theme.typography.tall.sm}
            >
              Pademangan, Jakarta Utara
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <IconElectricCategory />
              <IconElectricCategory />
              <IconElectricCategory />
              <IconElectricCategory />
            </View>
            <Text
              color={theme.colors.black}
              weight={theme.typography.weight.medium}
              size={theme.typography.tall.sm}
            >
              Start From
            </Text>
            <Text
              color={theme.colors.primary}
              weight={theme.typography.weight.semiBold}
              size={theme.typography.tall.lg}
            >
              Rp. 5.000.000/month
            </Text>
          </View>
        </View>
      </View>
    </Container>
  )
}

export default MoreWarehouse
