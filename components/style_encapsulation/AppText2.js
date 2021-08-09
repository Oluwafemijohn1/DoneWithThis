import React from 'react'
import { Text, Platform, StyleSheet } from 'react-native'

export default function AppText(props) {
    return (
       <Text style={styles.text} >{props.children}</Text>
    )
}


const styles = StyleSheet.create({
     text:{
         color: "tomato",
         ...Platform.select({
            ios:{
              fontSize: 40,
              fontFamily: "Avenir"  
            },
            android:{
                fontSize: 18,
                fontFamily: "Roboto",
            },
        })
     }
})
