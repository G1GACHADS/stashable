import { ThemeProvider } from 'styled-components'

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins'

import { registerRootComponent } from 'expo'

import Navigator from './navigator/navigator'
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
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
