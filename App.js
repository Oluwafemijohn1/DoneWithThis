import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, Image, ImageBackground, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";



export default function App() {
  return (
    <View style={{
      flex:1,
      justifyContent: "center",
      alignItems: "center"
    }} >
      <View
      style={{
        width: 100,
        height:100,
        backgroundColor: "dodgerblue",
        borderWidth: 10,
        borderColor: "royalblue",
        borderRadius:50,
        // borderRadius: 10, 
        // borderTopWidth: 20,
        // borderTopLeftRadius: 50,
      }}
      ></View>
    </View>
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
