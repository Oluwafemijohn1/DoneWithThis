import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import  Constants  from 'expo-constants'



export default function SafeAreaScreen(props) {
    return (
       <SafeAreaView style={[styles.screen, props.style]} >
           <View style={[ styles.view, props.style ]}>{props.children}</View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view:{
        flex: 1,
    }
})
