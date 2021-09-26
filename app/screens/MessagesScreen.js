import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../../components/ListItem";
import SafeAreaScreen from "../../components/SafeAreaScreen";
import ListItemSeparator from "../../components/ListItemSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/download1.jpeg"),
  },
  {
    id: 2,
    title:
      "T2naa a ava akav avkava vakvv akvav anaa anva vva anav akv vkav anva vakva vvfsfnv vfsnv azkdndz dvkavnv vznv avkvds vadv vavnd vakvdakvavsd akvava vkasvas vakvav akva v avfvsvf  vjv  vvavadv a va ",
    description: "T2naa a ava akav avkava vakvv akvav anaa anva vva anav akv vkav anva vakva vvfsfnv vfsnv azkdndz dvkavnv vznv avkvds vadv vavnd vakvdakvavsd akvava vkasvas vakvav akva v avfvsvf  vjv  vvavadv a va ",
    image: require("../assets/download.jpeg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from the messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T2",
              description: "D2",
              image: require("../assets/download.jpeg"),
            },
          ]);
        }}
      />
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({});
