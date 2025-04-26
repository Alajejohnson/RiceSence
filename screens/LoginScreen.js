import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Switch } from "react-native";
import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export const unstable_settings = {
  ssr: false,
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Show error
  const [showReset, setShowReset] = useState(false); //  Show Reset Password option
  const [rememberMe, setRememberMe] = useState(false); //  Remember Me toggle

 //Handle login
 const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    setError(null);
    setShowReset(false);
    //  You can save email/password if RememberMe is true (optional)
    navigation.navigate("Menu");
  } catch (err) {
    setError("Login failed. Please check your credentials.");
    setShowReset(true); //  Show reset password if login fails
  }
};

//  Reset Password handler
const handleResetPassword = async () => {
  if (!email) {
    setError("Enter your email address to reset password.");
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    setError("Password reset email sent.");
  } catch (err) {
    setError("Failed to send password reset email.");
  }
};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>

        <View style={{backgroundColor: Colors.primary,
                height: 180,
                width: 180,
                borderRadius: "50%",
                position: "absolute",
                top: "-10%",
                left: "70%",

                }} />
        <View style={{backgroundColor: Colors.primary,
            height: 180,
            width: 180,
            borderRadius: "50%",
            position: "absolute",
            bottom: "-10%",
            right: "70%",

            }} />

    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Sign In</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.btn}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.btn}
      />

 {/*  Remember Me Toggle */}
 <View style={{ flexDirection: "row", alignItems: "center",justifyContent: "center", marginBottom: 10 }}>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            thumbColor={Colors.primary}
          />
          <Text style={{ marginLeft: 10 }}>Remember Me</Text>
        </View>

        {/*  Show error */}
        {error && <Text style={{ color: Colors.secondary, marginBottom: 10 }}>{error}</Text>}


      <TouchableOpacity
        // onPress={() => navigation.navigate("Menu")}
        onPress={handleLogin}
        style={{
            backgroundColor: Colors.secondary,
            padding: 15,
            borderRadius: 25,
            alignItems: "center",
            marginTop: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Sign In</Text>
      </TouchableOpacity>

              {/*  Show Reset Password if login failed */}
              {showReset && (
          <TouchableOpacity onPress={handleResetPassword}>
            <Text
              style={{
                marginTop: 10,
                textAlign: "center",
                color: Colors.primary,
                fontWeight: "bold",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        )}

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={{ textAlign: "center", marginTop: 10 }}>            
          New User? <Text style={{ color: Colors.primary }}>Sign Up </Text>
        </Text>
      </TouchableOpacity>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        borderColor: Colors.ash1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 3,
        backgroundColor: Colors.ash2,
    }

})
