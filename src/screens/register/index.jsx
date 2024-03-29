import { ScrollView, StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'

import BaseText from '../../components/base-text'
import Container from '../../components/container'
import RegisterForm from './form'

export function RegisterScreen({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>
          <BaseText semiBold venti md mb={15}>
            Let's Get Started
          </BaseText>
          <RegisterForm navigation={navigation} />
        </Container>
      </ScrollView>
    </>
  )
}

export default RegisterScreen
