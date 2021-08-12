import React from "react";
import {
  FlatList,
  StyleSheet,
} from "react-native";
import ListItem from "../../components/ListItem";

import SafeAreaScreen from "../../components/SafeAreaScreen";
import ListItemSeparator from "../../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/download1.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/download.jpeg"),
  },
];

export default function MessagesScreen() {
  return (
    <SafeAreaScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={() =>
            <ListItemSeparator />
         }
      />
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({

});


