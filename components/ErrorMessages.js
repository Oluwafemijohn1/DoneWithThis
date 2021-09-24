import React from 'react';

import AppText from './style_encapsulation/AppText';

import { StyleSheet } from 'react-native';


function ErrorMessages({error, visible}) {
    if(!visible || !error) return null;
    return (
        <AppText style={styles.container} >{error}</AppText>
    );
}

const styles = StyleSheet.create({
    container:{
        color: "red",
    }
})

export default ErrorMessages;