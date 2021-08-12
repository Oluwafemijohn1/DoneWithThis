import React from 'react'
import { View, StyleSheet } from 'react-native'

import Card from './Card'

export default function CardComponent() {
    return (
        <View style={styles.container} >
            <Card title="Red jacket for sale"
            subTitle="$100"
            image={require("../../app/assets/passage.jpeg")}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100 
    },
})
