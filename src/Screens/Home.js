import React from 'react';
import {Image, View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Presets} from '../styles';
import Layout from '../components/layout/Layout';

import I18n from '../I18n';

export default function Home() {
    return (
        <ImageBackground
            source={require('../assest/img/BG1.png')}
            style={styles.image}>
            <View style={styles.Continar}>
                <View style={styles.LogoContinar}>
                    <Image
                        source={require('../assest/img/logo.png')}
                        style={styles.logo}></Image>
                </View>
                <View style={styles.ButtoumContinar}>
                    <Text style={styles.Buttum}>Back to Home</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Continar: {
        alignItems: 'center',
        paddingTop: '25%',
    },
    image: {
        // width:"100%",
        // flex: 1,
        resizeMode: 'cover',
        // justifyContent: "center",
        height: '100%',
        width: '100%',
    },
    LogoContinar: {},
    logo: {
        // width:"70%",
        // height:"45%",
    },
    ButtoumContinar: {
        backgroundColor: '#EF5723',
        width: '70%',
        // width:140,
        height: 60,
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 15,
        // marginLeft:"10%",
    },
    Buttum: {
        fontSize: 14,
        paddingTop: 20,
        color: '#fff',
    },
});
