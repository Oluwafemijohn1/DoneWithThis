import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function PaddingsAndMargins() {
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
            padding: 20,

          }}
        >
          <View
          style={{
            backgroundColor: "gold",
            width: 50,
            height: 50,
          }}
          ></View>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "tomato",
            padding: 20,
            margin: 20,
          }}
        ></View>
      </View>
    )
}

const styles = StyleSheet.create({
    
})
