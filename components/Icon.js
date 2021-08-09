import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./style_encapsulation/AppText";

export default function Icon() {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>I love react native!</AppText>
      <MaterialCommunityIcons name="email" size={24} color="dodgerblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
