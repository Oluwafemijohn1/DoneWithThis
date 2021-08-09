import React from "react";
import { Text, StyleSheet } from "react-native";

export default function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
