if (__DEV__) {
  import('../reactotron-config').then(() =>
    console.log('Reactotron configured')
  )
}

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native'
import { registerRootComponent } from 'expo'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components/native'
import api from './api'

import Navigator from './navigator'
import useAuthStore from './store/auth-store'
import theme from './theme'

function App() {
  const accessToken = useAuthStore(state => state.accessToken)
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

  const [fontsLoaded] = useFonts({
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
