import React from "react";
import { useState } from "react";
import { TextInput, Text } from "react-native";

import SafeAreaScreen from "../SafeAreaScreen";

function CustomTextInput() {
  const [firstName, setFirstName] = useState("");
  return (
    <SafeAreaScreen>
      <Text>{firstName}</Text>
      <TextInput
        maxLength={50}
        keyboardType="numeric"
        clearButtonMode="always"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
        placeholder="First name"
        onChangeText={(text) => setFirstName(text)}
      />

      <TextInput
        maxLength={50}
        keyboardType="numeric"
        clearButtonMode="always"
        secureTextEntry
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
        placeholder="First name"
        onChangeText={(text) => setFirstName(text)}
      />
    </SafeAreaScreen>
  );
}

export default CustomTextInput;
