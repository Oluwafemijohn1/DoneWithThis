import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../../components/style_encapsulation/AppText";

import colors from "../config/colors";
import ListItem from "../../components/ListItem";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price} </AppText>
        <View style={styles.listContainer}>
          <ListItem
            image={require("../assets/images.jpeg")}
            title="Oluwafemi Ogundipe"
            subTitle="5 listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  listContainer: {
    marginVertical: 40,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
