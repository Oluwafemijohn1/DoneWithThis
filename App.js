import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, Image, ImageBackground, View } from "react-native";

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

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();
  return (
    <SafeAreaScreen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="email" />
    </SafeAreaScreen>
  );
}
