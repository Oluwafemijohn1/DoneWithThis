import React from "react";
import { StyleSheet, ImageBackground, Image, View, Text } from "react-native";
import { Button } from "react-native-elements";

import colors from "../config/colors";
import AppButton from "../../components/AppButton";

function WelcomeScreen() {
  const RaisedButton = (props) => <Button raised {...props} />;
  return (
    <ImageBackground
    blurRadius= {2}
      style={styles.backgroundimage}
      source={require("../assets/passage.jpeg")}
      imageStyle={{ resizeMode: "cover" }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/total_logo.png")}
        />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer} >
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundimage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer:{
    padding:20,
    width: "100%",
  },
  tagline: {
    marginTop: 0,
    fontSize: 25,
    fontWeight: "600",
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: "center"
  },
  logoContainer: {
    position: "absolute",
    top: 50,
  },

  registerButton: {
    width: "100%",
    height: 40,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
