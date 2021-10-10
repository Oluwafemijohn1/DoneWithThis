import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import EncapsulatingStyles from "./components/practiceComponent/EncapsulatingStyles";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CardComponent from "./components/practiceComponent/CardComponent";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import SafeAreaScreen from "./components/SafeAreaScreen";
import Icon from "./components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingsScreen";
import CustomTextInput from "./components/practiceComponent/CustomTextInput";
import AppTextInput from "./components/AppTextInput";
import CustomSwitch from "./components/practiceComponent/CustomSwitch";
import DatePicker from "./components/practiceComponent/DatePicker";
import AppPicker from "./components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListItem from "./components/ListItem";
import Test from "./components/Test";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import FormImagePicker from "./components/forms/FormImagePicker";
import AuthNavigator from "./app/navigation/AuthNavigation";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Link = () =>{
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetsDetails", {id:1} )} />
  )
}

const Tweets = ({navigation}) => (
  <SafeAreaScreen>
    <Text>Tweets</Text>
    {/* <Button title="View Details" onPress={() => navigation.setOptions({ title: 'Updated!' }) } /> */}
    <Button title="View Details" onPress={() => navigation.navigate("TweetsDetails", {id:1} ) } />
    {/* <Link /> */}
  </SafeAreaScreen>
);

const TweetsDetails = ({ route }) => (
  <SafeAreaScreen>
 
    <Text>Tweets Details {route.params.id}</Text>
  </SafeAreaScreen>
);

const Stack = createNativeStackNavigator(); 
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerStyle:{backgroundColor: "dodgerblue"},
    headerTintColor: "white"
  }} >
    {/* <Stack.Screen name="Tweets" component={Tweets} options={{ title: "Hello" }} /> */}
    <Stack.Screen name="Tweets" component={Tweets} options={{headerShown: false}} />
    {/* Passing title dynamically */}
    <Stack.Screen name="TweetsDetails" component={TweetsDetails} 
  
    options={{ title: "Details screen"}} 
    // this is not working yet
    // options={({ route })=> ({title: route.params.id})} 
    />
  </Stack.Navigator>
);

const Account = () =>(
  <SafeAreaScreen>
    <Text>Account</Text>
  </SafeAreaScreen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () =>(
  <Tab.Navigator screenOptions={{
    // tabBarActiveTintColor: "tomato",
    tabBarActiveBackgroundColor:"tomato",
    tabBarActiveTintColor: "white",
    tabBarInactiveBackgroundColor: "#eee",
    tabBarInactiveTintColor: "black"
  }}  >
    <Tab.Screen name="Feed" component={StackNavigator} options={{
      tabBarIcon: ({ size, color})=> <MaterialCommunityIcons name="home" size={size} color={color} />
    }} />
    <Tab.Screen name="Account" component={Account} options={{
      tabBarIcon: ({ size, color})=> <MaterialCommunityIcons name="account" size={size} color={color} />
    }}  />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme} >
      {/* <StackNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}
