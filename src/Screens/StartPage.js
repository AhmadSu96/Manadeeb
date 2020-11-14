import React from 'react';
import {
    Dimensions,
    Image,
    TouchableOpacity,
    View,
    Text,
    ImageBackground,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Presets} from '../styles';
const height = Dimensions.get('window').height;
import I18n from '../I18n';

export default function StartPage() {
    return (
        <ImageBackground
            source={require('../assest/img/BG.png')}
            style={{height: height}}>
            <View
                style={[
                    Presets.flexColumn,
                    Presets.justifyBetween,
                    Presets.flex1,
                ]}>
                <View style={Presets.flex1} />
                <View
                    style={[
                        Presets.container,
                        Presets.justifyEnd,
                        Presets.alignCenter,
                        Presets.alignCenter,
                        {flex: 2, paddingBottom: 20},
                    ]}>
                    <Text style={[Presets.whiteTitle, Presets.bold]}>
                        {I18n.t('save_hours')}
                    </Text>
                    <Text style={Presets.whiteTitle}>
                        {I18n.t('at_the_top_of_your_finger')}
                    </Text>
                    <Text style={[Presets.brownTitle, {paddingTop: 15}]}>
                        {I18n.t('lets_save_your_time')}
                    </Text>
                </View>
                <View style={[Presets.flexRow, {paddingLeft: 25}]}>
                    <Text style={{padding: 5}}>ِ{I18n.t('arabic')}</Text>
                    <Text style={{padding: 5}}>{I18n.t('english')}</Text>
                </View>
                <Text />
                <View style={[Presets.container, Presets.flex1]}>
                    <TouchableOpacity
                        onPress={() => Actions.Login()}
                        style={[Presets.buttonContainer1, Presets.flexRow]}>
                        <Text style={Presets.colorWhite}>
                            {I18n.t('sign_in_with')}
                        </Text>
                        <Image
                            source={require('../assest/img/logo.png')}
                            style={{width: 50, height: 50}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Actions.Register()}
                        style={Presets.buttonContainer1}>
                        <Text style={Presets.colorWhite}>
                            {I18n.t('or_create_a_manadeeb_account')}{' '}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Actions.DriverLogin()}
                        style={[
                            Presets.flexRow,
                            Presets.alignCenter,
                            Presets.justifyCenter,
                        ]}>
                        <Image
                            source={require('../assest/img/logo.png')}
                            style={{width: 70, height: 70}}
                        />
                        <Text style={[Presets.brownTitle, Presets.borderBrown]}>
                            {I18n.t('drivers')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}
