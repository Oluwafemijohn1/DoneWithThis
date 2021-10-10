import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import SafeAreaScreen from "../../components/SafeAreaScreen";
import ListItem from "../../components/ListItem";
import colors from "../config/colors";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/ListItemSeparator";
import Route from "../navigation/Route";

const menuItem = [
  {
    title: "My messages",
    Icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "My listing",
    Icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    // Section list could all be used for this screen
    <SafeAreaScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Oluwafemi"
          subTitle="femi@gmail.com"
          image={require("../assets/download12.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.Icon.name}
                  backgroundColor={item.Icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(Route.MESSAGES)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </SafeAreaScreen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
