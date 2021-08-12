import React from "react";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";
import { color } from "react-native-elements/dist/helpers";

import colors from "../app/config/colors";
import AppText from "./style_encapsulation/AppText";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle} >{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title:{
    marginBottom: 7,
  },
  subTitle:{
    color: colors.secondary,
    fontWeight: "bold"
  }
});
