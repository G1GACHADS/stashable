import { ScrollView, StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import Text from '../../components/text'
import RegisterForm from './form'

export function RegisterScreen({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>
          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.venti.md}
            mb="15"
          >
            Let's Get Started
          </Text>
          <RegisterForm navigation={navigation} />
        </Container>
      </ScrollView>
    </>
  )
}

export default RegisterScreen
