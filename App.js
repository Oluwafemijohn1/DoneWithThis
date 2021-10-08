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

import EncapsulatingStyles from "./components/practiceComponent/EncapsulatingStyles";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CardComponent from "./components/practiceComponent/CardComponent";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import SafeAreaScreen from "./components/SafeAreaScreen";
import Icon from "./components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
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

const Link = () =>{
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetsDetails")} />
  )
}

const Tweets = ({navigation}) => (
  <SafeAreaScreen>
    <Text>Tweets</Text>
    {/* <Button title="View Details" onPress={() => navigation.setOptions({ title: 'Updated!' }) } />
    <Button title="View Details" onPress={() => navigation.navigate("TweetsDetails") } /> */}
    <Link />
  </SafeAreaScreen>
);

const TweetsDetails = () => (
  <SafeAreaScreen>
    <Text>Tweets Details</Text>
  </SafeAreaScreen>
);

const Stack = createNativeStackNavigator(); 
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} options={{headerShown: false, }} />
    <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
