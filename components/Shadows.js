import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Shadows() {
    return (
        <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "dodgerblue",

            // For iOS, apply these three properties
            shadowColor: "grey",
            // shadowOffset: {width: 10, height: 10},
            // shadowOffset: {width: -10, height: 10},
            shadowOffset: {width: -10, height: 10},
            shadowOpacity: 1,

            // for Android apply this property. But this is not working on  my phone as at the time of typing this 
            elevation:40,
          }}
        ></View>
      </View>
    )
}

const styles = StyleSheet.create({
    
})