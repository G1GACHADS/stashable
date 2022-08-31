import { Image, ScrollView, StatusBar, View, StyleSheet } from 'react-native'
import { useTheme } from 'styled-components/native'

import routes from '../../constants/routes'

import Button from '../../components/button'
import Container from '../../components/container'
import Text from '../../components/text'
import Input from '../components/input'

import ElectricCategoryIcon from '../../components/icons/iconElectricCategory'

export function GettingStartedScreen({ navigation }) {
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
          {' '}
          {/* Banner */}
          <Image
            source={require('../../../assets/images/stashable-sale-banner.png')}
            style={{
              width: null,
              height: 120,
            }}
          ></Image>
        </Container>
        <Container style={{ gap: 10 }}>
          {' '}
          {/* Place Section */}
          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.tall.xl}
          >
            Place
          </Text>
          <View
            style={{ flexDirection: 'column', gap: 10, alignItems: 'center' }}
          >
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../../assets/images/bali-place.png')}
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
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../../assets/images/jakarta-place.png')}
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
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../../assets/images/jakarta-place.png')}
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
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../../assets/images/jakarta-place.png')}
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
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../../assets/images/jakarta-place.png')}
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
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../../assets/images/jakarta-place.png')}
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
            </View>
          </View>
        </Container>
        <Container>
          {' '}
          {/* Featured Warehouse */}
          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.tall.xl}
          >
            Featured Warehouse
          </Text>
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
                source={require('../../../assets/images/warehouse-image.png')}
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
                <ElectricCategoryIcon />
                <ElectricCategoryIcon />
                <ElectricCategoryIcon />
                <ElectricCategoryIcon />
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
                source={require('../../../assets/images/warehouse-image.png')}
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
                source={require('../../../assets/images/warehouse-image.png')}
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
        </Container>{' '}
        {/* End Of Featured Warehouse */}
        <Container style={{ gap: 15 }}>
          {' '}
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
                source={require('../../../assets/images/warehouse-banner.png')}
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
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
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
                source={require('../../../assets/images/warehouse-banner.png')}
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
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
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
                source={require('../../../assets/images/warehouse-banner.png')}
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
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
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
                source={require('../../../assets/images/warehouse-banner.png')}
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
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
                  <ElectricCategoryIcon />
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

export default GettingStartedScreen
