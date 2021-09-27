import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import SafeAreaScreen from './SafeAreaScreen';


function Test(props) {

    const permission = async () =>{
        const {  granted } = await ImagePicker.requestCameraPermissionsAsync();
        if(!granted) alert("You need to enable permissions to access the library");
    }

    useEffect(() => {
        permission
    }, [])
    return (
        <SafeAreaScreen style={styles.container}></SafeAreaScreen>
    );
}

const styles = StyleSheet.create({
    container:{

    }
})

export default Test;