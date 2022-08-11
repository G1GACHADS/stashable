import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GettingStartedScreen from "./screens/getting-started";

import * as route from "./routes";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={route.gettingStartedRoute}>
        <Stack.Screen
          name={route.gettingStartedRoute}
          component={GettingStartedScreen}
        />
        <Stack.Screen name={route.loginRoute} component={LoginScreen} />
        <Stack.Screen name={route.registerRoute} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
