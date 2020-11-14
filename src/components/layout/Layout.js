import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import Header from './Header';

import {Presets} from '../../styles';

export default function Layout({children}) {
    return (
        <SafeAreaView>
            <View style={Presets.fullScreen}>
                <StatusBar hidden={true} />
                <Header />
                <View>{children}</View>
            </View>
        </SafeAreaView>
    );
}
