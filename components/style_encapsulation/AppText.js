import React from 'react'
import { Text, Platform, StyleSheet } from 'react-native'

export default function AppText(props) {
    return (
       <Text style={styles.text} >{props.children}</Text>
    )
}

const styles = StyleSheet.create({
     text:{
         fontSize: 18,
         fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
     }
})
