import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, Image, ImageBackground, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Borders from "./components/Borders";
import Shadows from "./components/Shadows";


export default function App() {
  return (
    <Shadows />
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
