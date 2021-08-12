import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, Image, ImageBackground, View } from "react-native";


import EncapsulatingStyles from "./components/practiceComponent/EncapsulatingStyles";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CardComponent from "./components/practiceComponent/CardComponent";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <ViewImageScreen />
  );
}


const textStyle = { backgroundColor: "cyan" };

const styles = StyleSheet.create({
  container: {
    color: "red",
  },
  view: {
    width:100,
    height: 100,
    backgroundColor: "red"
  }
});
