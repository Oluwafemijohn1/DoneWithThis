import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, Image, ImageBackground, View } from "react-native";
import * as ImagePicker from 'expo-image-picker'

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
import ListItem from "./components/ListItem"
import Test from "./components/Test"


export default function App() {

  const permission = async () =>{
    const {  granted } = await ImagePicker.requestCameraPermissionsAsync();
    if(!granted) alert("You need to enable permissions to access the library");
}

useEffect(() => {
    permission()
}, [])

  return (
    <SafeAreaScreen ></SafeAreaScreen>
  );
}
