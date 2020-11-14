import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import {TextInput} from 'react-native-gesture-handler';

function DriverRate({props}) {
    return (
        <ScrollView style={{marginTop: 10}}>
            <View
                style={[
                    Presets.orangeContainer,
                    Presets.flexRow,
                    {marginLeft: 0, marginRight: 0},
                ]}>
                <Text style={[Presets.bold, {flex: 1, fontSize: 16}]}>
                    {I18n.t('from')}
                </Text>
                <View style={{flex: 4}}>
                    <Text style={[Presets.px10, Presets.colorGrayLink]}>
                        {I18n.t('sender_details')}
                    </Text>
                    <View style={[Presets.justifyStart, Presets.flexRow]}>
                        <Text style={Presets.px10}>{props.data.from.name}</Text>
                    </View>
                    <Text style={Presets.px10}>{props.data.from.location}</Text>
                </View>
            </View>

            {/* Reciever Details */}
            <View
                style={[
                    Presets.orangeContainer,
                    Presets.flexRow,
                    {marginLeft: 0, marginRight: 0},
                ]}>
                <Text style={[Presets.bold, {flex: 1, fontSize: 16}]}>
                    {I18n.t('to')}
                </Text>
                <View style={{flex: 4}}>
                    <Text style={[Presets.px10, Presets.colorGrayLink]}>
                        {I18n.t('reciever_details')}
                    </Text>
                    <View style={[Presets.justifyStart, Presets.flexRow]}>
                        <Text style={Presets.px10}>{props.data.to.name}</Text>
                    </View>
                    <Text style={Presets.px10}>{props.data.to.name}</Text>
                </View>
            </View>

            {/* Package Details */}
            <View
                style={[
                    Presets.orangeContainer,
                    {marginLeft: 0, marginRight: 0},
                ]}>
                <Text
                    style={[
                        Presets.bold,
                        Presets.px10,
                        {fontSize: 16, paddingBottom: 5},
                    ]}>
                    {I18n.t('package_details')}
                </Text>
                <View style={Presets.flexRow}>
                    <Text style={[Presets.px10, {flex: 1}]}>
                        {props.data.object}
                    </Text>
                    <Text style={[Presets.colorGrayLink, {flex: 1}]}>
                        {props.data.package}
                    </Text>
                </View>
                <View style={Presets.flexRow}>
                    <Text style={[Presets.px10, {flex: 1}]}>
                        {props.data.data + ' ' + props.data.time}
                    </Text>
                    <Text style={[Presets.colorGrayLink, {flex: 1}]}>
                        {props.data.status}
                    </Text>
                </View>
            </View>

            {/* Delivered */}
            <View style={Presets.container}>
                <Text style={Presets.colorGrayLink}>{I18n.t('delivered')}</Text>
                {props.data.rated ? (
                    <View style={[Presets.alignCenter]}>
                        <Image
                            style={{height: 150, width: 150}}
                            source={require('../../assest/icons_png/starmark.png')}
                        />
                        <View>
                            <Text style={Presets.colorGrayLink}>
                                {I18n.t('awesome')}
                            </Text>
                            <Text
                                style={[
                                    Presets.colorGrayLink,
                                    {marginTop: 15},
                                ]}>
                                {I18n.t('customer_were_very_satisfied')}
                            </Text>
                        </View>
                    </View>
                ) : (
                    <View style={[Presets.alignCenter]}>
                        <Image
                            style={{height: 150, width: 150}}
                            source={require('../../assest/icons_png/starq.png')}
                        />
                        <Text style={Presets.colorGrayLink}>
                            {I18n.t('this_service_is_not_rated_yet')}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

export default DriverRate;
