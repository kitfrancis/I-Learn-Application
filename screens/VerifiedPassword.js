import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const VerifiedPassword = () => {
  const [password, setPassword] = useState("");

  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigation = useNavigation();

  const handleVerifyPassword = async () => {
    if (password.trim() === "" || passwordConfirmation.trim() === "") {
      Alert.alert(
        "Error",
        "Please enter both password and password confirmation."
      );
      return;
    }

    console.log("Password: ", password);
    navigation.navigate("Allset");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/lock.png")}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          color: "black",
        }}
      >
        Forgot Password
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginHorizontal: 30,
          color: "black",
          fontSize: 15,
        }}
      >
        Enter your new password below.
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 20,
          marginBottom: 20,
          fontSize: 18,
          alignSelf: "center",
          backgroundColor: "#f9f9f9",
        }}
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        keyboardType="Verified-Password"
        secureTextEntry
      />

      <TextInput
        style={{
          width: "90%",
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 20,
          marginBottom: 20,
          fontSize: 18,
          alignSelf: "center",
          backgroundColor: "#f9f9f9",
        }}
        placeholder="New Password (Confirmation)"
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        keyboardType="Verified-Password"
        secureTextEntry
      />
      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          backgroundColor: "#4CAF50",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
        onPress={handleVerifyPassword}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Reset Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
});

export default VerifiedPassword;
