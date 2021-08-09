import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, Image, ImageBackground, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Borders from "./components/Borders";
import Shadows from "./components/Shadows";
import PaddingsAndMargins from "./components/PaddingsAndMargins";
import StylingText from "./components/StylingText";
import EncapsulatingStyles from "./components/EncapsulatingStyles";
import Icon from "./components/Icon";

export default function App() {
  return (
    <EncapsulatingStyles />
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
