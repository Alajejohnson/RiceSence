import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (

    <SafeAreaView  style={{ flex: 1, backgroundColor: "transparent"}}>
     
     <ImageBackground style={styles.background} source={require('../app/assets/Bg.png')} resizeMode="cover" > 
    <View style={styles.container}>
      <Text style={styles.title}>RiceSence</Text>
      <Text style={styles.text}> Lorem ipsum dolor sit amet consectetur. Egestas faucibus elementum adipiscing venenatis tortor adipiscing nunc neque. Pretium mauris elit cursus pulvinar. Molestie a tellus vestibulum morbi nulla a consequat.</Text>
      </View>

       <View style={styles.loginButton} >
       <Text style={styles.text1}>Lorem ipsum dolor sit amet consectetur.</Text>
       {/* Sign In Button */}

      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.btn1}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.btn2}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
        </ImageBackground>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 80,
    alignItems: "center",
    justifyContent: "center",
     },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
//  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
 
},
  title: {
    fontSize: 32,    fontWeight: "bold",
    marginBottom: 15,
    color: Colors.white,
    // fontFamily: Fonts.Header,
  },
  loginButton: {
      width: "100%",
      height: '30%',
      backgroundColor: Colors.white,
      justifyContent: 'center',
      padding: 15,
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 16,
 },
     text1: {
        marginBottom: 15,
        fontSize: 14,
        textAlign: "center"
     },
  btn1: {
    backgroundColor: Colors.secondary,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: "center",
    
 },
 btn2: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    
 },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
