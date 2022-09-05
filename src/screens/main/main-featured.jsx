import { Image, ScrollView, StatusBar, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import Text from '../../components/text'

import IconElectricCategory from '../../components/icons/icon-electric-category'
import BaseText from '../../components/base-text'

export function Featured({ navigation }) {
  const theme = useTheme()
  return (
    <>
      {/* Featured Warehouse */}
      <Container>
        <BaseText semiBold tall xl>
          Featured Warehouse
        </BaseText>
      </Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: 175,
            height: 254,
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 10,
          }}
        >
          <Image
            source={require('../../assets/images/warehouse-image.png')}
            style={{
              width: null,
              height: 132,
            }}
          ></Image>

          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.medium}
            size={theme.typography.tall.lg}
          >
            Luna Warehouse
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
        <View
          style={{
            width: 175,
            height: 254,
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 10,
          }}
        >
          <Image
            source={require('../../assets/images/warehouse-image.png')}
            style={{
              width: null,
              height: 132,
            }}
          ></Image>

          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.medium}
            size={theme.typography.tall.lg}
          >
            Luna Warehouse
          </Text>
          <Text
            color={theme.colors.grey3}
            weight={theme.typography.weight.regular}
            size={theme.typography.tall.sm}
          >
            Pademangan, Jakarta Utara
          </Text>
        </View>
        <View
          style={{
            width: 175,
            height: 254,
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 10,
          }}
        >
          <Image
            source={require('../../assets/images/warehouse-image.png')}
            style={{
              width: null,
              height: 132,
            }}
          ></Image>

          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.medium}
            size={theme.typography.tall.lg}
          >
            Luna Warehouse
          </Text>
          <Text
            color={theme.colors.grey3}
            weight={theme.typography.weight.regular}
            size={theme.typography.tall.sm}
          >
            Pademangan, Jakarta Utara
          </Text>
        </View>
      </ScrollView>
    </>
    //   {/* End Of Featured Warehouse */}
  )
}

export default Featured
