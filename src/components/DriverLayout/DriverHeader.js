import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import {Actions} from 'react-native-router-flux';

function DriverHeader() {
    const [currentScene, setcurrentScene] = useState(Actions.currentScene);

    useEffect(() => {
        setcurrentScene(Actions.currentScene);
    }, [Actions.currentScene]);

    const handleRoute = (name) => {
        if (name != Actions.currentScene) {
            Actions.replace(name);
        }
    };

    return (
        <View style={[Presets.flexRow, Presets.justifyAround]}>
            <TouchableOpacity
                onPress={() => handleRoute('DriverPreviousOrders')}
                style={[Presets.buttonContainer2, {width: '30%'}]}>
                <Text style={Presets.colorWhite}>
                    {I18n.t('previous_orders')}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleRoute('DriverProfile')}
                style={[Presets.buttonContainer2, {width: '30%'}]}>
                <Text style={Presets.colorWhite}>{I18n.t('profile')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleRoute('DriverPortal')}
                style={[Presets.buttonContainer2, {width: '30%'}]}>
                <Text style={Presets.colorWhite}>{I18n.t('main')}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DriverHeader;
