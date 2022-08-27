import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'styled-components'

import * as route from '../constants/routes'

import GettingStartedScreen from '../screens/getting-started'
import LoginScreen from '../screens/login'
import RegisterScreen from '../screens/register'

const Stack = createNativeStackNavigator()

export const Navigator = () => {
  const theme = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={route.gettingStartedRoute}
        screenOptions={{
          contentStyle: {
            backgroundColor: '#fff',
          },
          headerStyle: {
            backgroundColor: theme.colors.white1,
          },
          headerTitleStyle: {
            fontFamily: theme.typography.family.semiBold,
            fontSize: theme.typography.tall.lg_i,
            color: theme.colors.black,
          },
        }}
      >
        <Stack.Screen
          name={route.gettingStartedRoute}
          component={GettingStartedScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={route.loginRoute}
          component={LoginScreen}
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name={route.registerRoute}
          component={RegisterScreen}
          options={{
            title: 'Register',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
