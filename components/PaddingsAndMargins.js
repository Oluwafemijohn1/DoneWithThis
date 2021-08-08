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
            backgroundColor: "dodgerblue"
          }}
        ></View>
      </View>
    )
}

const styles = StyleSheet.create({
    
})
