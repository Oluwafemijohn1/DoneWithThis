import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/passage.jpeg")} />
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: 300,
    },
})