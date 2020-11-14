import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import TopHeader from './TopHeader';

import {Presets} from '../../styles';
import DriverHeader from './DriverHeader';

export default function index({children, scroll = false}) {
    return (
        <SafeAreaView>
            <View style={Presets.fullScreen}>
                <StatusBar hidden={true} />
                <TopHeader />
                <View
                    style={[Presets.radiusContainer, scroll && Presets.flex1]}>
                    <DriverHeader />
                    {children}
                </View>
            </View>
        </SafeAreaView>
    );
}
