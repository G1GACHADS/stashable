import { ScrollView, StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import Text from '../../components/text'

export function MainScreen({ navigation }) {
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
            Main Page
          </Text>
        </Container>
      </ScrollView>
    </>
  )
}

export default MainScreen
