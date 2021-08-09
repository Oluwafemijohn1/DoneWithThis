import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import {StyleSheet,Text, Image, ImageBackground, View} from "react-native";

import { GiCircleClaws } from "react-icons/gi";
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  console.log(useDimensions());
  console.log(useDeviceOrientation);
  const {portrait, landscape} = useDeviceOrientation();
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView >
        
        
        <ImageBackground
            style={styles.backgrund_image}
            source={{ uri: "https://picsum.photos/200/300" }}
          >
            <MaterialCommunityIcons style={styles.cummunityIcon} name="brightness-7" size={100} color="tomato" />
           
            <Text>Hello</Text>
          </ImageBackground>
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
  backgrund_image:{
    height: "100%",
    width: "100%",
  },
  cummunityIcon:{
    marginTop: "20%",
    marginHorizontal: "42%",
  }

});