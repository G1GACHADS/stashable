import styled from 'styled-components/native'

import BaseText from '../../components/base-text'
import routes from '../../constants/routes'

const PlaceRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const PlaceItem = styled.Pressable`
  min-width: 33.3333%;
  max-width: 33.3333%;
  padding-right: 10px;
`

const PlaceImage = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100px;
  border-radius: 5px;
`

export function Place({ navigation }) {
  const places = [
    {
      name: 'Jakarta',
      image: require('../../assets/images/jakarta-place.png'),
    },
    {
      name: 'Surabaya',
      image: require('../../assets/images/surabaya-place.png'),
    },
    {
      name: 'Medan',
      image: require('../../assets/images/medan-place.png'),
    },
    {
      name: 'Batam',
      image: require('../../assets/images/batam-place.png'),
    },
    {
      name: 'Bali',
      image: require('../../assets/images/bali-place.png'),
    },
    {
      name: 'Semarang',
      image: require('../../assets/images/semarang-place.png'),
    },
  ]

  return (
    <>
      <BaseText semiBold tall xl mt={20}>
        Place
      </BaseText>
      <PlaceRow>
        {places.slice(0, 3).map((place, index) => (
          <PlaceItem
            key={index}
            onPress={() => {
              navigation.navigate(routes.discoverPageRoute, {
                query: place.name,
              })
            }}
          >
            <PlaceImage source={place.image}>
              <BaseText color="white1" semiBold tall lg>
                {place.name}
              </BaseText>
            </PlaceImage>
          </PlaceItem>
        ))}
      </PlaceRow>
      <PlaceRow>
        {places.slice(3, 6).map((place, index) => (
          <PlaceItem
            key={index}
            onPress={() => {
              navigation.navigate(routes.discoverPageRoute, {
                query: place.name,
              })
            }}
          >
            <PlaceImage source={place.image}>
              <BaseText color="white1" semiBold tall lg>
                {place.name}
              </BaseText>
            </PlaceImage>
          </PlaceItem>
        ))}
      </PlaceRow>
    </>
  )
}

export default Place
