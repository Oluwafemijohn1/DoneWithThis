import React from 'react';
import { Image, StyleSheet } from 'react-native';
import SafeAreaScreen from '../../components/SafeAreaScreen';

function LoginScreen(props) {
    return (
        <SafeAreaScreen>
            <Image style={styles.logo} source={require("../assets/total_logo.png")} />
        </SafeAreaScreen>
    );
}


const styles = StyleSheet.create({
    logo:{
        width: 80,
        height:80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;