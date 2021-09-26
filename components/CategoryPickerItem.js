import React from "react";
import { StyleSheet, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { colors } from "react-native-elements";

import Icon from "./Icon";
import AppText from "./style_encapsulation/AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback  onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
        {console.log(item.label)}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
  },
});

export default CategoryPickerItem;
