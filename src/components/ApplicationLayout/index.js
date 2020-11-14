import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Presets} from '../../styles';
import Footer from './Footer';
import Header from './Header';

function index({children}) {
    return (
        <SafeAreaView style={Presets.flex1}>
            <Header />
            <ScrollView
                contentContainerStyle={{
                    // flex: 1,
                    // backgroundColor: 'white',
                    // paddingTop: 50,
                    // marginTop: 100
                }}>
                {children}
            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
}

export default index;
