import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialIcons";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [fullnameverified, setFullnameVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [emailverified, setEmailVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordverified, setPasswordVerified] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("http://192.168.1.5:3000/")
      .then((res) => {
        console.log("Connected to backend:", res.data);
      })
      .catch((err) => {
        console.error("Backend connection failed:", err.message);
        Alert.alert("Backend Error", err.message);
      });
  }, []);

  const handleSignup = async () => {
    let errors = [];

    if (!fullname.trim()) {
      errors.push("Full name is required.");
    }

    if (!email.trim()) {
      errors.push("Email is required.");
    } else if (!/^[\w-\.]+@gmail\.com$/.test(email)) {
      errors.push("Email must be a valid Gmail address.");
    }

    if (!password.trim()) {
      errors.push("Password is required.");
    } else if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }

    if (errors.length > 0) {
      Alert.alert("Validation Error", errors.join("\n"));
      return;
    }

    const userData = {
      name: fullname,
      email,
      password,
    };

    console.log("Attempting signup with data:", userData);

    try {
      const res = await axios.post("http://192.168.1.5:3000/signup", userData);
      console.log(res.data);

      if (res.data.status === "ok") {
        Alert.alert("Signup Success", `Welcome, ${fullname}!`);
        navigation.navigate("Login");
      } else {
        Alert.alert("Registration failed", res.data.data || "Try again.");
      }
    } catch (error) {
      console.log("Signup Error:", error.message);
      Alert.alert(
        "Signup Failed",
        error.response?.data?.message || error.message || "Unknown error"
      );
    }
  };

  const [role, setRole] = useState("student");

  return (
    <ScrollView style={styles.container}>
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
        style={styles.input}
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullname}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Enroll now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setRememberMe(!rememberMe)}
      >
        <Icon
          name={rememberMe ? "check-box" : "check-box-outline-blank"}
          size={24}
          color="#4CAF50"
        />
        <Text style={styles.checkboxLabel}>Remember Me</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR ACCESS QUICKLY WITH</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../assets/Logo-Search-Google--on-transparent-background-PNG.png")}
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Google</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          Log in
        </Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 18,
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 35,
  },
  checkboxLabel: { fontSize: 16, color: "black", marginLeft: 10 },
  orText: {
    fontSize: 13,
    color: "#666",
    marginVertical: 30,
    alignSelf: "center",
  },
  googleButton: {
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
  },
  loginText: {
    fontSize: 16,
    color: "black",
    alignSelf: "center",
    marginBottom: 50,
  },
  loginLink: {
    color: "#4CAF50",
    fontWeight: "bold",
    textDecorationStyle: "underline",
  },
});

export default Signup;
