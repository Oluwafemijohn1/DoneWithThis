import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Montserrat } from "expo-font";

export default function StylingText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        I love react native! This is my first react native app. Some more text
      </Text>
    </View>
  );
}

//The costume font that i tried is not working

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    // fontFamily: 'Courier',
    // fontFamily: 'Roboto',
    fontStyle: "italic",
    // fontWeight: "bold",
    fontWeight: "600",
    color: "tomato",
    textTransform: "capitalize",
    // textDecorationLine: "line-through",
    textAlign: "right",
    lineHeight: 40,
  },
});
