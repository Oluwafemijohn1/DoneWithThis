import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import Route from "./Route";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      presentation: "modal",
      headerShown: false,
    }}
  >
    <Stack.Screen name={Route.LISTING_SCREEN} component={ListingsScreen} />
    <Stack.Screen name={Route.LISTING_DETAILS} component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
