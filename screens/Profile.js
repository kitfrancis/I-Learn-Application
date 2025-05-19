import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Profile = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("User");
  const [userData, setUserData] = useState("");

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      const res = await axios
        .post("http://192.168.1.2:3000/userdata", {
          token: token,
        })
        .then((res) => {
          console.log(res.data), setUserData(res.data.data);
        });

      if (res.data.status === "ok") {
        setUserName(res.data.data.name);
      }
    } catch (err) {
      console.log("Error in getData:", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Image
          source={require("../assets/i-learn.png")}
          style={{
            width: 180,
            height: 180,
            borderRadius: 90,
            borderWidth: 3,
            borderColor: "#4CAF50",
            marginBottom: 20,
          }}
        />
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#1F2937",
            marginBottom: 5,
          }}
        >
          {userData.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#6B7280",
            marginBottom: 20,
          }}
        >
          Welcome back to your profile
        </Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 14,
            color: "#6B7280",
            marginBottom: 5,
            marginLeft: 10,
          }}
        >
          Email
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "black",
            marginBottom: 5,
            marginLeft: 10,
          }}
        >
          {userData.email}
        </Text>
        <Text style={{ fontSize: 14, color: "#6B7280", marginBottom: 5 }}>
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter email address"
          keyboardType="email-address"
          style={{
            backgroundColor: "#fff",
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 10,
            borderColor: "#D1D5DB",
            borderWidth: 1,
            marginBottom: 25,
            fontSize: 16,
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          width: "100%",
          height: 55,
          backgroundColor: "#10B981",
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "600",
            letterSpacing: 1,
          }}
        >
          Save Changes
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
