import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const courses = [
  { id: "1", name: "Mathematics" },
  { id: "2", name: "English" },
  { id: "3", name: "Science" },
  { id: "4", name: "History" },
  { id: "5", name: "Biology" },
  { id: "6", name: "Physics" },
  { id: "7", name: "Chemistry" },
  { id: "8", name: "Geography" },
];

const Home = () => {
  const [userName, setUserName] = useState("User");

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      const res = await axios.post("http://192.168.1.5:3000/userdata", {
        token,
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

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "#ffffff",
        flex: 1,
        margin: 20,
        paddingVertical: 20,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#4CAF50",
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          padding: 20,
          backgroundColor: "#4CAF50",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
          }}
        >
          Welcome back,
        </Text>
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            color: "#fff",
            marginVertical: 5,
          }}
        >
          {userName}!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#e0f2f1",
          }}
        >
          Study Smart with I-Learn.
        </Text>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "600",
          marginTop: 30,
          marginBottom: 10,
          marginLeft: 20,
          color: "#333",
        }}
      >
        Subjects
      </Text>

      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 30,
        }}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8fa",
  },
});

export default Home;
