import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email.");
      return;
    }

    console.log("Email entered:", email);
    navigation.navigate("VerifiedPassword");
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
        Please enter your email address you will receive a link to create a new
        password via email.
      </Text>
      <TextInput
        style={{
          width: "90%",
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 30,
          marginBottom: 20,
          fontSize: 18,
          alignSelf: "center",
          backgroundColor: "#f9f9f9",
        }}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          marginTop: 10,
          backgroundColor: "#4CAF50",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
        onPress={handleForgotPassword}
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

export default ForgotPassword;
