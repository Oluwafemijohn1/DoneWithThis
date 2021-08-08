import React from "react";
import { View } from "react-native";

export default function Borders() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 50,
          // borderRadius: 10,
          // borderTopWidth: 20,
          // borderTopLeftRadius: 50,
        }}
      ></View>
    </View>
  );
}
