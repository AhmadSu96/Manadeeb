import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export default function TopHeader() {
    const direction = I18n.locale === 'ar' ? 'row-reverse' : 'row';

    return (
        <View style={Presets.headerContainer}>
            <TouchableOpacity
                style={[
                    Presets.px10,
                    {flexDirection: direction, paddingBottom: 15},
                ]}
                onPress={() => Actions.pop()}>
                <Icon
                    style={Presets.px10}
                    name={'long-arrow-left'}
                    size={20}
                    color={colors.grayLink}
                />
                <Text style={Presets.colorGrayLink}>
                    {I18n.t('hi_manadeep')}
                </Text>
            </TouchableOpacity>
            <View style={Presets.alignCenter}>
                <Image
                    style={{width: 170, height: 100}}
                    source={require('../../assest/img/logo.png')}
                />
                <Text
                    style={[
                        Presets.brownTitle,
                        Presets.bold,
                        {marginTop: -20},
                    ]}>
                    {/* {I18n.t('drivers')} */}
                    Drivers
                </Text>
            </View>
        </View>
    );
}
