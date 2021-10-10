import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { widthPercentageToDP as WP, heightPercentageToDP as HP } from "react-native-responsive-screen"

import SafeAreaScreen from "../../components/SafeAreaScreen";
import Card from "../../components/Card";
import colors from "../config/colors";


const listing = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/images5.jpeg"),
  },
  {
    id: 2,
    title: "Guarding for sale",
    price: 1000,
    image: require("../assets/odenwald-germany-is-pure-nature_181624-32381.jpeg"),
  },
];

function ListingsScreen({navigation}) {
  return (
    <SafeAreaScreen style={styles.screen} >
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={()=>navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </SafeAreaScreen>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
    screen:{
        padding: WP(3),
        backgroundColor: colors.light
    }
});
