import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import Route from "./Route";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      presentation: "modal",
    }}
  >
    <Stack.Screen name={Route.ACCOUNT}  component={AccountScreen} />
    <Stack.Screen
      name={Route.MESSAGES}
      component={MessagesScreen}
      options={{ presentation: "card" }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
