import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {Presets} from '../styles';
import I18n from '../I18n';
import colors from '../styles/colors';
import {Actions} from 'react-native-router-flux';
import {useDispatch, useSelector} from 'react-redux';
import {setDriverOrder} from '../actions';

import FirebaseSetup from '../Firebase/index';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

function DriverViewOrder({data}) {
    const dispatch = useDispatch();

    const user_id = useSelector((state) => state.user.user.user_id);

    const handleApprove = () => {
        // @todo Update order set its driver_id to current user id

        // update realtime database
        const ordersRef = database().ref(`/orders/${data.id}`);
        ordersRef.update({driver_id: user_id, orderStatus: 'driving'});

        ordersRef.once('value', function(snapshoot) {
            firestore().collection('orders').add(snapshoot.val())
        })

        // add to firestore
        
        dispatch(setDriverOrder(data.id));
        Actions.replace('DriverPortal');
    };

    return (
        <ScrollView style={[Presets.container, {marginTop: 10}]}>
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
                        <Text style={Presets.px10}>{data.reciever.name}</Text>
                        <Text style={Presets.px10}>{data.reciever.phone}</Text>
                    </View>
                    <Text style={Presets.px10}>{data.from.placeName}</Text>
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
                        <Text style={Presets.px10}>{data.reciever.name}</Text>
                        <Text style={Presets.px10}>{data.reciever.phone}</Text>
                    </View>
                    <Text style={Presets.px10}>{data.to.placeName}</Text>
                </View>
            </View>

            {/* Package Details */}
            <View
                style={[
                    Presets.orangeContainer,
                    Presets.flexRow,
                    Presets.justifyStart,
                    {marginLeft: 0, marginRight: 0},
                ]}>
                <Text
                    style={[
                        Presets.bold,
                        Presets.px10,
                        {fontSize: 16, paddingBottom: 5, flex: 1},
                    ]}>
                    {I18n.t('package_details')}
                </Text>
                <View style={{flex: 4}}>
                    <Text style={Presets.colorGrayLink}>{data.object}</Text>
                    <Text style={Presets.colorGrayLink}>{data.package}</Text>
                    <Text style={Presets.colorGrayLink}>{data.comments}</Text>
                </View>
            </View>
            <View style={[Presets.flexRow, Presets.justifyBetween]}>
                <TouchableOpacity
                    onPress={() => handleApprove()}
                    style={[
                        Presets.buttonContainer2,
                        {backgroundColor: colors.success, width: '48%'},
                    ]}>
                    <Text style={Presets.colorWhite}>{I18n.t('approve')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Actions.replace('DriverPortal')}
                    style={[
                        Presets.buttonContainer2,
                        {backgroundColor: colors.danger, width: '48%'},
                    ]}>
                    <Text style={Presets.colorWhite}>{I18n.t('back')}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default DriverViewOrder;
