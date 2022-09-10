import { Image, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import Text from '../../components/text'

const PlaceContainer = styled.View`
  align-items: center; 
  justify-content: center; 
  padding: 2%;
`
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
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <PlaceContainer>
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
        </PlaceContainer>
        <PlaceContainer>
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
        </PlaceContainer>
        <PlaceContainer>
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
        </PlaceContainer>
        <PlaceContainer>
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
        </PlaceContainer>
        <PlaceContainer>
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
        </PlaceContainer>
        <PlaceContainer>
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
        </PlaceContainer>
      </View>
    </Container>
  )
}

export default Place
