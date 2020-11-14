import React from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import {useSelector} from 'react-redux';

function Processing() {
    const placeName = useSelector((state) => state.app.from.placeName);

    return (
        <View style={[Presets.orangeContainer, {borderRadius: 0}]}>
            {/* Logo Section */}
            <View style={[Presets.flexRow, Presets.justifyCenter]}>
                <Image
                    source={require('../../assest/img/logo.png')}
                    style={{height: 150, width: 150}}
                />
            </View>

            {/* Order Details Section */}
            <View style={[Presets.flexRow, Presets.justifyBetween]}>
                <View
                    style={[Presets.flexRow, Presets.flexWrap, {width: '32%'}]}>
                    <Text style={[Presets.bold, {fontSize: 10}]}>
                        {I18n.t('driver')}:
                    </Text>
                    <Text
                        style={[
                            Presets.colorGrayLink,
                            Presets.px10,
                            {fontSize: 10},
                        ]}>
                        إسم السائق
                    </Text>
                </View>
                <View
                    style={[Presets.flexRow, Presets.flexWrap, {width: '32%'}]}>
                    <Text style={[Presets.bold, {fontSize: 10}]}>
                        {I18n.t('status')}:
                    </Text>
                    <Text
                        style={[
                            Presets.colorGrayLink,
                            Presets.px10,
                            {fontSize: 10},
                        ]}>
                        {I18n.t('shipment_accepted')}
                    </Text>
                </View>
                <View
                    style={[Presets.flexRow, Presets.flexWrap, {width: '32%'}]}>
                    <Text style={[Presets.bold, {fontSize: 10}]}>
                        {I18n.t('order')}#:
                    </Text>
                    <Text
                        style={[
                            Presets.colorGrayLink,
                            Presets.px10,
                            {fontSize: 10},
                        ]}>
                        7253
                    </Text>
                </View>
            </View>

            {/* Order Progress Header */}
            <View
                style={[
                    Presets.container,
                    Presets.flexRow,
                    Presets.justifyBetween,
                    Presets.orderHeaderContainer,
                    {position: 'relative'},
                ]}>
                <View style={Presets.orderHeaderLine} />
                <View style={Presets.alignCenter}>
                    <Image
                        source={require('../../assest/icons_png/confirm.png')}
                        style={{height: 30, width: 30}}
                    />
                    <Text style={Presets.orderHeaderText}>
                        {I18n.t('confirmed')}
                    </Text>
                </View>
                <View style={Presets.alignCenter}>
                    <Image
                        source={require('../../assest/icons_png/processing.png')}
                        style={{height: 30, width: 30}}
                    />
                    <Text style={Presets.orderHeaderText}>
                        {I18n.t('processing')}
                    </Text>
                </View>
                <View style={Presets.alignCenter}>
                    <Image
                        source={require('../../assest/icons_png/dispatched.png')}
                        style={{height: 30, width: 30}}
                    />
                    <Text style={Presets.orderHeaderText}>
                        {I18n.t('dispatched')}
                    </Text>
                </View>
                <View style={Presets.alignCenter}>
                    <Image
                        source={require('../../assest/icons_png/delivered.png')}
                        style={{height: 30, width: 30}}
                    />
                    <Text style={Presets.orderHeaderText}>
                        {I18n.t('delivered')}
                    </Text>
                </View>
            </View>

            {/* Summary */}
            <View style={Presets.container}>
                <Text style={[Presets.brownTitle, {marginBottom: 15}]}>
                    {I18n.t('result_sumary')}
                </Text>
                <View
                    style={[
                        Presets.flexRow,
                        Presets.justifyBetween,
                        Presets.alignEnd,
                    ]}>
                    <View style={{width: '70%'}}>
                        <View style={[Presets.flexRow, Presets.justifyStart]}>
                            <Text>13-10-2020</Text>
                            <Text style={[Presets.px10, {color: 'red'}]}>
                                13:52 ساعة
                            </Text>
                        </View>
                        <Text>{placeName}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL(
                                `whatsapp://send?text=test&phone=11111`,
                            )
                        }
                        style={[
                            Presets.alignCenter,
                            Presets.px10,
                            {width: '40%'},
                        ]}>
                        <Icon name="whatsapp" size={40} color={colors.green} />
                        <Text>{I18n.t('contact_the_driver')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Processing;
