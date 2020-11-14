import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

import {Dimensions} from 'react-native';
import {Presets} from '../styles';
import I18n from '../I18n';
import {Actions} from 'react-native-router-flux';

const height = Dimensions.get('window').height;

function Welcome() {
    return (
        <ImageBackground
            source={require('../assest/img/BG1.png')}
            style={{height: height}}>
            <View style={[Presets.flex1, Presets.justifyCenter]}>
                <View style={[Presets.WelcomeContainer]}>
                    <Text style={Presets.grayHeader}>
                        {I18n.t('welcome')} diriver name
                    </Text>
                    <View style={{flex: 1}} />
                    <View style={{paddingBottom: 20}}>
                        <Text style={Presets.colorGrayLink}>
                            {I18n.t('have_some_item_for_delivery_today_q')}
                        </Text>
                        <Text style={Presets.colorGrayLink}>
                            {I18n.t('have_some_item_for_delivery_today_q')}
                        </Text>
                        <Text style={Presets.colorGrayLink}>
                            {I18n.t('have_some_item_for_delivery_today_q')}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={[Presets.buttonContainer2, {width: '70%'}]}
                        onPress={() => Actions.replace('MyOrders')}>
                        <Text style={Presets.colorWhite}>
                            {I18n.t('back_to_home')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Welcome;
