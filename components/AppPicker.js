import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../app/config/defaultStyle";
import AppText from "./style_encapsulation/AppText";
import { Modal } from "react-native";
import SafeAreaScreen from "./SafeAreaScreen";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, onSelectItem, selectedItem, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyle.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{selectedItem? selectedItem.label : placeholder} </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyle.colors.medium}
          />
        </View>
      </TouchableNativeFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaScreen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList data={items}  keyExtractor={item => item.value.toString() }
          renderItem={({item}) => <PickerItem label={item.label} onPress={()=> {
            setModalVisible(false);
            onSelectItem(item);
          } } />}
           />
        </SafeAreaScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
