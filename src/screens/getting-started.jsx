import { Image, ScrollView, StatusBar, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import routes from '../constants/routes'

import Button from '../components/button'
import Container from '../components/container'
import BaseText from '../components/base-text'

export function GettingStartedScreen({ navigation }) {
  const { colors, typography } = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Image
          source={require('../../assets/images/geting-started-banner.png')}
          style={{
            width: null,
            height: 400,
          }}
        />
        <Container>
          <BaseText semiBold venti md>
            Find Storage Room At Stashable
          </BaseText>
          <BaseText color="grey3" regular tall md>
            Stashable provides a platform for users to reserve a place for them
            to store their goods in the warehouse
          </BaseText>

          <View style={{ alignItems: 'flex-end' }}>
            <Button
              sm
              title="Get Started"
              onPress={() => navigation.navigate(routes.loginRoute)}
            />
          </View>
        </Container>
      </ScrollView>
    </>
  )
}

export default GettingStartedScreen
