import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, TouchableOpacity, Alert } from "react-native";
import Home from "../screens/Home";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import VerifiedPassword from "../screens/VerifiedPassword";
import Allset from "../screens/Allset";
import Logout from "../screens/Logout";
import Profile from "../screens/Profile";
import { ImageEditor } from "react-native";
import { CommonActions } from "@react-navigation/native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomHeaderLeft = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.getParent().openDrawer()}
    style={{ marginLeft: 15 }}
  >
    <Image
      source={require("../assets/menu-icon-2.png")}
      style={{ width: 30, height: 30 }}
    />
  </TouchableOpacity>
);

const CustomHeaderRight = () => (
  <TouchableOpacity style={{ marginRight: 15 }}>
    <Image
      source={require("../assets/profile.png")}
      style={{ width: 35, height: 35, borderRadius: 17.5 }}
    />
  </TouchableOpacity>
);

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#4CAF50",
            height: 100,
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: "Forgotten Password",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            paddingBottom: 10,
          },
          headerStyle: {
            backgroundColor: "#4CAF50",
            height: 100,
          },
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "I-Learn",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#4CAF50",
            height: 100,
          },
          headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
          headerRight: () => <CustomHeaderRight />,
        })}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Enroll Now",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            paddingBottom: 10,
          },
          headerStyle: {
            backgroundColor: "#4CAF50",
            height: 100,
          },
        }}
      />

      <Stack.Screen
        name="VerifiedPassword"
        component={VerifiedPassword}
        options={{
          title: "Verify Password",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            paddingBottom: 10,
          },
          headerStyle: {
            backgroundColor: "#4CAF50",
            height: 100,
          },
        }}
      />
      <Stack.Screen
        name="Allset"
        component={Allset}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={Allset}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppDrawer = ({ navigation }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ drawerLabel: "Home", headerShown: false }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Profile",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#4CAF50",
            height: 100,
          },
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={() => null}
        options={{
          drawerLabel: "Log Out",
          headerShown: false,
        }}
        listeners={({ navigation }) => ({
          drawerItemPress: (e) => {
            e.preventDefault();

            Alert.alert(
              "Confirm Logout",
              "Are you sure you want to log out?",
              [
                { text: "Cancel", style: "cancel" },
                {
                  text: "Yes",
                  onPress: () => {
                    navigation.navigate("HomeStack", { screen: "Login" });

                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [
                          {
                            name: "HomeStack",
                            state: { routes: [{ name: "Login" }] },
                          },
                        ],
                      })
                    );
                  },
                },
              ],
              { cancelable: true }
            );
          },
        })}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;

//
