import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../AppButton";

import AppText from "../style_encapsulation/AppText";

export default function EncapsulatingStyles() {
  return <View style={styles.container}>
    <AppButton title="Login" onPress={()=>{
      console.log("Tapped")
    }} />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
