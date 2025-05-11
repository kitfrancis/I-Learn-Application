import React, { useEffect } from "react";
import { View, Text } from "react-native";

const Logout = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Login");
    }, 500);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Logging out...</Text>
    </View>
  );
};

export default Logout;
