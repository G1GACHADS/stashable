import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'styled-components/native'

import * as route from './constants/routes'

import GettingStartedScreen from './screens/getting-started'
import LoginScreen from './screens/login'
import MainScreen from './screens/main'
import RegisterScreen from './screens/register'
import WarehouseScreen from './screens/warehouse'
import CheckoutScreen from './screens/warehouse/checkout'
import useAuthStore from './store/auth-store'

const Stack = createNativeStackNavigator()

export const Navigator = () => {
  const theme = useTheme()
  const { isAuthenticated } = useAuthStore()

  return (
    <Stack.Navigator
      initialRouteName={route.warehousePageRoute}
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
        animation: 'slide_from_bottom',
        animationDuration: 150,
      }}
    >
      {isAuthenticated ? (
        // User is signed in
        <>
          <Stack.Screen
            name={route.mainPageRoute}
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={route.warehousePageRoute}
            component={WarehouseScreen}
            options={{
              title: 'Warehouse Details',
            }}
          />
          <Stack.Screen
            name={route.warehouseCheckoutPageRoute}
            component={CheckoutScreen}
            options={{
              title: 'Checkout',
            }}
          />
        </>
      ) : (
        // User is not signed in
        <>
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
        </>
      )}
    </Stack.Navigator>
  )
}

export default Navigator
