import { Image, ScrollView, StatusBar, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import routes from '../../constants/routes'

import Button from '../../components/button'
import Container from '../../components/container'
import Text from '../../components/text'

import IconElectricCategory from '../../components/icons/icon-electric-category'

export function Place({ navigation }) {
  const theme = useTheme()
  return (
    <Container style={{ gap: 10 }}>
      {/* Place Section */}
      <Text
        color={theme.colors.black}
        weight={theme.typography.weight.semiBold}
        size={theme.typography.tall.xl}
      >
        Place
      </Text>
      <View style={{ flexDirection: 'row', flexWrap:'wrap' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8  }}>
            <Image
              source={require('../../assets/images/bali-place.png')}
              style={{
                width: 100,
                height: 100,
              }}
            ></Image>
            <Text
              color={theme.colors.white1}
              weight={theme.typography.weight.medium}
              size={theme.typography.tall.lg}
              style={{ position: 'absolute' }}
            >
              Jakarta
            </Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8  }}>
            <Image
              source={require('../../assets/images/surabaya-place.png')}
              style={{
                width: 100,
                height: 100,
              }}
            ></Image>
            <Text
              color={theme.colors.white1}
              weight={theme.typography.weight.medium}
              size={theme.typography.tall.lg}
              style={{ position: 'absolute' }}
            >
              Surabaya
            </Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8  }}>
            <Image
              source={require('../../assets/images/medan-place.png')}
              style={{
                width: 100,
                height: 100,
              }}
            ></Image>
            <Text
              color={theme.colors.white1}
              weight={theme.typography.weight.medium}
              size={theme.typography.tall.lg}
              style={{ position: 'absolute' }}
            >
              Medan
            </Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8  }}>
            <Image
              source={require('../../assets/images/batam-place.png')}
              style={{
                width: 100,
                height: 100,
              }}
            ></Image>
            <Text
              color={theme.colors.white1}
              weight={theme.typography.weight.medium}
              size={theme.typography.tall.lg}
              style={{ position: 'absolute' }}
            >
              Batam
            </Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8  }}>
            <Image
              source={require('../../assets/images/bali-place.png')}
              style={{
                width: 100,
                height: 100,
              }}
            ></Image>
            <Text
              color={theme.colors.white1}
              weight={theme.typography.weight.medium}
              size={theme.typography.tall.lg}
              style={{ position: 'absolute' }}
            >
              Bali
            </Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8  }}>
            <Image
              source={require('../../assets/images/semarang-place.png')}
              style={{
                width: 100,
                height: 100,
              }}
            ></Image>
            <Text
              color={theme.colors.white1}
              weight={theme.typography.weight.medium}
              size={theme.typography.tall.lg}
              style={{ position: 'absolute' }}
            >
              Semarang
            </Text>
          </View>
        </View>
    </Container>
  )
}

export default Place
