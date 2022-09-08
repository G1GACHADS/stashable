import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import * as route from './constants/routes'
import useAuthStore from './store/auth-store'

import BaseText from './components/base-text'
import IconHome from './components/icons/icon-home'
import IconHistory from './components/icons/icon-history'

import GettingStartedScreen from './screens/getting-started'
import LoginScreen from './screens/login'
import MainScreen from './screens/main'
import DiscoverScreen from './screens/discover'
import RegisterScreen from './screens/register'
import WarehouseScreen from './screens/warehouse'
import CheckoutScreen from './screens/warehouse/checkout'
import HistoryScreen from './screens/history'
import RoomDetailScreen from './screens/warehouse/room'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  const theme = useTheme()
  return (
    <Stack.Navigator
      initialRouteName={route.warehouseRoomDetailPageRoute}
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
        name={route.warehouseRoomDetailPageRoute}
        component={RoomDetailScreen}
        options={{
          title: 'Room Details',
        }}
      />
      <Stack.Screen
        name={route.warehouseCheckoutPageRoute}
        component={CheckoutScreen}
        options={{
          title: 'Checkout',
        }}
      />
    </Stack.Navigator>
  )
}

const HistoryStack = () => {
  const theme = useTheme()
  return (
    <Stack.Navigator
      initialRouteName={route.mainPageRoute}
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
      <Stack.Screen
        name={route.historyPageRoute}
        component={HistoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
const DiscoverStack = () => {
  const theme = useTheme()
  return (
    <Stack.Navigator
      initialRouteName={route.mainPageRoute}
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
      <Stack.Screen
        name={route.discoverPageRoute}
        component={DiscoverScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
export const Tabs = () => {
  const theme = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          elevation: 20,
          shadowColor: 'hsla(0, 0, 62, 0.1)',
          shadowOffset: { width: 0, height: -4 },
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <IconHome
                fill={focused ? theme.colors.primary : undefined}
                stroke={focused ? theme.colors.primary : theme.colors.black}
              />
              <BaseText color={focused ? 'primary' : 'black'} semiBold tall md>
                Home
              </BaseText>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Rental History"
        component={HistoryStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <IconHistory filled={focused} />
              <BaseText color={focused ? 'primary' : 'black'} semiBold tall md>
                History
              </BaseText>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              {/* belum ganti icon discover*/}
              <IconHistory filled={focused} />
              <BaseText color={focused ? 'primary' : 'black'} semiBold tall md>
                Discover
              </BaseText>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export const Navigator = () => {
  const theme = useTheme()
  const { isAuthenticated } = useAuthStore()

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
        animation: 'slide_from_bottom',
        animationDuration: 150,
      }}
    >
      {isAuthenticated ? (
        // User is signed in
        ((
          <Stack.Screen
            name={route.mainPageRoute}
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
        ),
        (
          <Stack.Screen
            name={route.discoverPageRoute}
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
        ))
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
