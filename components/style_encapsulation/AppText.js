import React from 'react'
import { Text, Platform, StyleSheet } from 'react-native'

import styles from '../style/styles'

export default function AppText(props) {
    return (
       <Text style={[styles.text, props.style]} >{props.children}</Text>
    )
}

