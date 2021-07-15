import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import {StyleSheet, View} from "react-native";



export default function App() {
  console.log(useDimensions());
  console.log(useDeviceOrientation);
  const {portrait, landscape} = useDeviceOrientation();
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={{
            backgroundColor : "white",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around"   ,
            alignItems: "center "       
        }}>
          <View style={{
            width: 100,
            height: 100, 
            backgroundColor: "dodgerblue"
          }} />
          <View style={{
            width: 100,
            height: 100, 
            backgroundColor: "gold"
          }} />
          <View style={{
            width: 100,
            height: 100, 
            backgroundColor: "tomato"
          }} />


      <OrientationComponent />
      <RandomComponent style={{justifyContent: landscape ? "flex-end" : "center"}}/ >
      <FlexComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const textStyle = { backgroundColor: "cyan" };

const styles = StyleSheet.create({
  view1: {
    height: "60%",
    backgroundColor: "cyan",
  },
 
});
