import React from 'react';
import { View } from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/living_room.jpeg")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon : {
        height: 50,
        width: 50,
        position: "absolute",
        top: 40,
        left: 30, 
        backgroundColor: colors.primary,
    },
    container:{
        backgroundColor: colors.black,
        flex: 1 
    },
    deleteIcon: {
        height: 50,
        width: 50,
        position: "absolute",
        top: 40,
        right: 30, 
        backgroundColor: colors.secondary,
    },
    image:{
        width: "100%",
        height: "100%"
    },
})

export default ViewImageScreen;