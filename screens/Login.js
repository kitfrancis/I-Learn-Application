import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log(email, password);
    const userData = { email: email, password };
    axios.post("http://192.168.1.2:3000/login", userData).then((res) => {
      console.log(res.data);

      if (res.data.status === "ok") {
        Alert.alert("Login successful!");
        AsyncStorage.setItem("token", res.data.data);
        navigation.navigate("Home");
      } else {
        Alert.alert("Login failed", res.data.message || "Invalid credentials");
      }
    });
  }

  const handleLogin = () => {
    if (fullname.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please enter both full name and password.");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters long.");
      return;
    }

    console.log("Full name:", fullname);
    console.log("Password:", password);
    navigation.navigate("Home", { fullname });
  };

  // const handleSubmit = () => {
  //   if (!email.endsWith("@gmail.com")) {
  //     Alert.alert("Error", "Email must be a Gmail address.");
  //   } else {
  //     Alert.alert("Success", "Valid Gmail!");
  //   }
  // };
  return (
    <SafeAreaView style={styles.container} keyboardShouldPersistTaps={"always"}>
      <ScrollView>
        <Image
          source={require("../assets/i-learn.png")}
          style={{
            width: "90%",
            height: 240,
            marginTop: 20,
            alignSelf: "center",
            borderRadius: 10,
          }}
          resizeMode="contain"
        />

        <TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          // onPress={handleSubmit}
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
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
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
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={{
            width: "90%",
            height: 50,
            backgroundColor: "#4CAF50",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 20,
          }}
          // onPress={handleLogin}
          onPress={() => {
            {
              handleSubmit();
            }
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            ontSize: 18,
            color: "5C5C5C",
            textDecorationLine: "underline",
            marginTop: 10,
            marginLeft: 35,
          }}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgotten password?{" "}
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#666",
            marginVertical: 30,
            alignSelf: "center",
          }}
        >
          OR
        </Text>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "90%",
            height: 50,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            justifyContent: "center",
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../assets/Logo-Search-Google--on-transparent-background-PNG.png")}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Google</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 16,
            color: "black",
            marginTop: 10,
            alignSelf: "center",
            marginVertical: 30,
          }}
        >
          Don't have an account?{" "}
          <Text
            style={{
              color: "#4CAF50",
              fontWeight: "bold",
              textDecorationStyle: "underline",
            }}
            onPress={() => navigation.navigate("Signup")}
          >
            Enroll now!{" "}
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});

export default Login;
