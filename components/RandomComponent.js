import React from "react";
import { StatusBar } from "expo-status-bar";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  TouchableWithoutFeedback,
  Platform,
  Image,
  ScrollView,
} from "react-native";

function RandomComponent() {
  // console.log(useDimensions())
  console.log(useDeviceOrientation);

  const handleTextPress = () => {
    console.log("This text is pressed");
  };

  const handleImagePress = () => {
    console.log("This image is pressed");
  };

  const handleButtonPress = () => {
    console.log("This button is pressed");
  };

  const handleButtonTapped = () => {
    alert("Button tapped");
  };

  const handleButtonTappedToo = () => {
    Alert.alert("My title", "My message", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
  };

  const handleButtonTappedPrompt = () => {
    Alert.prompt("My title", "My message", (text) => console.log(text));
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.safeAreaView}>
        <Text
          style={[styles.text, textStyle]}
          numberOfLines={1}
          onPress={handleTextPress}
        >
          Hello oluwafemi. THis is a very long text the i whis to make it very
          longer than this becuse i'm testing something.
        </Text>
        <Text
          style={[styles.safeAreaView, textStyle]}
          onPress={handleTextPress}
        >
          Hello oluwafemi. THis is a very long text the i whis to make it very
          longer than this becuse i'm testing something.
        </Text>

        <TouchableWithoutFeedback onPress={handleImagePress}>
          {/* Fade duration is only supported in android */}
          <Image
            fadeDuration={1000}
            style={styles.image}
            source={require("../assets/whatsapp_image.png")}
          />
        </TouchableWithoutFeedback>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/200/300" }}
          />
        </TouchableOpacity>

        <TouchableHighlight>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/200/300" }}
          />
        </TouchableHighlight>
        <Button
          title="Click me"
          color="rgb(255, 0, 255)"
          onPress={handleButtonTapped}
        />
        <Button
          style={styles.buttonToo}
          title="Click me too"
          onPress={handleButtonTappedToo}
        />
        {/* Prompt works only on ios, May be it will change in the feature */}
        <Button
          style={styles.buttonToo}
          title="Click me prompt"
          onPress={handleButtonTappedPrompt}
        />
      </SafeAreaView>
    </ScrollView>
  );
}


const textStyle = { backgroundColor: "cyan" };

const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "yellow"
  },
  image: {
    width: 100,
    height: 100,
  },
  view1: {
    height: "60%",
    backgroundColor: "cyan",
  },
});

export default RandomComponent;
