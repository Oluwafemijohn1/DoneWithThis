import React from "react";
import { StyleSheet, ImageBackground, Image, View, Text } from "react-native";
import { Button } from "react-native-elements";

import colors from "../config/colors";

function WelcomeScreen() {
  const RaisedButton = (props) => <Button raised {...props} />;
  return (
    <ImageBackground
      style={styles.backgroundimage}
      source={require("../assets/passage.jpeg")}
      imageStyle={{ resizeMode: "cover" }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/total_logo.png")}
        />
        <Text style={styles.text} >Sell what you don't need</Text>
      </View>
      <RaisedButton title="Yea" />
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
      <Button title="Click me" color="rgb(255, 0, 255)" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundimage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    marginTop: 0,
    fontWeight: "bold"
  },
  logo: {
    height: 200,
    width: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 50    
  },
  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: colors.primary,
    alignItems: "center"
  },
  registerButton: {
    width: "100%",
    height: 40,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
