import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreenComponent from "../../screens/SplashScreen"; 
import WelcomeScreen from "../../screens/WelcomeScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import LoginScreen from "../../screens/LoginScreen";
import MainMenu from "../../screens/MainMenu"
import Fertilizer from "../../screens/Fertilizer"
import Pest from "../../screens/Pest"
import History from  "../../screens/History"
import { ActivityIndicator, View } from "react-native";

const Stack = createStackNavigator();

export default function App() {

  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreenComponent} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MainMenu} />
        <Stack.Screen name="Pest" component={Pest} />
        <Stack.Screen name="Fertilizer" component={Fertilizer} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    
  );
}
