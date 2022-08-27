import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native'
import { registerRootComponent } from 'expo'
import { ThemeProvider } from 'styled-components'

import Navigator from './Navigator'
import theme from './theme'

function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default registerRootComponent(App)
