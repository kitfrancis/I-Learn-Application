import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Profile = () => {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/i-learn.png")}
        style={{
          width: 240,
          height: 240,
          marginTop: 20,
          alignSelf: "center",
          borderRadius: 150,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          alignSelf: "center",
          fontSize: 30,
          marginTop: 10,
          color: "#1D1616",
          fontWeight: "bold",
        }}
      >
        Edit Profile
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 40,
          marginBottom: 20,
          fontSize: 18,
          alignSelf: "center",
          backgroundColor: "#f9f9f9",
        }}
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullname}
      />

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
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
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
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Save Changes
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Profile;
