import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'styled-components/native'

import * as route from './constants/routes'

import GettingStartedScreen from './screens/getting-started'
import LoginScreen from './screens/login'
import RegisterScreen from './screens/register'

const Stack = createNativeStackNavigator()

export const Navigator = () => {
  const theme = useTheme()

  return (
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
          fontFamily: theme.typography.weight.semiBold,
          fontSize: theme.typography.tall.lg_i,
          color: theme.colors.black,
        },
        animation: 'slide_from_right',
        animationDuration: 150,
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
  )
}

export default Navigator
