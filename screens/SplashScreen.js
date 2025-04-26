import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image, SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // Prevent splash from hiding immediately

export default function SplashScreenComponent({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync(); // Hide the splash screen
      navigation.replace("Welcome"); // Navigate to Welcome Screen
    }, 3000); // Show splash for 3 seconds
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <Image source={require("../app/assets/RiceSence.png")} style={{ width: 240, height: 100 }} />
      <ActivityIndicator size="large" color = "orange" /> 
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  }
});
