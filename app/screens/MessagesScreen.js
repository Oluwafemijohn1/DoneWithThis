import React from "react";


import { FlatList, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import ListItem from "../../components/ListItem";

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
    <SafeAreaView style={styles.screen} >
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
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
});
