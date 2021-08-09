import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import AppText from './style_encapsulation/platformSpecific/AppText';
import AppText2 from './style_encapsulation/AppText2';

export default function EncapsulatingStyles() {
    return (
        <View style={styles.container}>
        <AppText style={styles.text}>
          I love react native! 
        </AppText>
      </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
})
