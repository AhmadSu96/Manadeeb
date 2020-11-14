import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import {setOrderStatus, setPayer} from '../../actions';

import FirebaseSetup from'../../Firebase/index'; 
import database from '@react-native-firebase/database';

function SelectPayer() {
    const [payer, setPayerInput] = useState(null);

    const app = useSelector((state) => state.app);

    const dispatch = useDispatch();

    useEffect(() => {
        if (app.payer != null) {
            setPayerInput(app.payer);
        }
    }, []);

    // Here we'll calculate the coast
    const getPrice = () => {
        return '65.00';
    };

    const goManadeep = () => {
        app.orderStatus = 'processing'
        if (payer != null) {
            dispatch(setPayer(payer));
            dispatch(setOrderStatus('processing'));
            database()
                .ref('orders')
                .push(app)
                .then(() => console.log('Data set.'))
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert(I18n.t('please_select_the_payer'));
        }
    };

    return (
        <View>
            {/* Sender Details */}
            <View style={[Presets.orangeContainer, Presets.flexRow]}>
                <Text style={[Presets.bold, {flex: 1, fontSize: 16}]}>
                    {I18n.t('from')}
                </Text>
                <View style={{flex: 4}}>
                    <Text style={[Presets.px10, Presets.colorGrayLink]}>
                        {I18n.t('sender_details')}
                    </Text>
                    <View style={[Presets.justifyStart, Presets.flexRow]}>
                        <Text style={Presets.px10}>{app.reciever.name}</Text>
                        <Text>{app.reciever.phone}</Text>
                    </View>
                    <Text style={Presets.px10}>{app.from.placeName}</Text>
                </View>
            </View>

            {/* Reciever Details */}
            <View style={[Presets.orangeContainer, Presets.flexRow]}>
                <Text style={[Presets.bold, {flex: 1, fontSize: 16}]}>
                    {I18n.t('to')}
                </Text>
                <View style={{flex: 4}}>
                    <Text style={[Presets.px10, Presets.colorGrayLink]}>
                        {I18n.t('reciever_details')}
                    </Text>
                    <View style={[Presets.justifyStart, Presets.flexRow]}>
                        <Text style={Presets.px10}>أنس</Text>
                        <Text>+974 12345 789</Text>
                    </View>
                    <Text style={Presets.px10}>{app.to.placeName}</Text>
                </View>
            </View>

            {/* Package Details */}
            <View style={[Presets.orangeContainer]}>
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
                        {app.reciever.comments}
                    </Text>
                    <Text style={[Presets.colorGrayLink, {flex: 1}]}>
                        {I18n.t(app.reciever.package)}
                    </Text>
                </View>
                <View style={Presets.flexRow}>
                    <Text style={[Presets.px10, {flex: 1}]}>
                        {I18n.t('empty')}
                    </Text>
                    <Text style={[Presets.colorGrayLink, {flex: 1}]}>
                        {I18n.t('empty')}
                    </Text>
                </View>
            </View>
            <View style={Presets.container}>
                <View style={[Presets.flexRow, {paddingBottom: 15}]}>
                    <Text style={[Presets.totalPrice, Presets.bold]}>
                        {I18n.t('total')} {I18n.t('qr')}
                        {app.cost}
                    </Text>
                    <Text style={Presets.px10}>{I18n.t('payer_is_q')}</Text>
                </View>
                <View style={[Presets.flexRow, Presets.justifyAround]}>
                    <TouchableOpacity
                        onPress={() => setPayerInput('sender')}
                        style={[
                            Presets.flexRow,
                            Presets.flexStart,
                            {padding: 2},
                        ]}>
                        <View style={Presets.radioCircle}>
                            {payer === 'sender' && (
                                <View style={Presets.radioCircleSelected} />
                            )}
                        </View>
                        <Text>{I18n.t('sender')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setPayerInput('reciever')}
                        style={[
                            Presets.flexRow,
                            Presets.flexStart,
                            {padding: 2},
                        ]}>
                        <View style={Presets.radioCircle}>
                            {payer === 'reciever' && (
                                <View style={Presets.radioCircleSelected} />
                            )}
                        </View>
                        <Text>{I18n.t('reciever')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={[
                    Presets.container,
                    Presets.flexRow,
                    Presets.justifyCenter,
                    {marginBottom: 20},
                ]}>
                <TouchableOpacity
                    onPress={() => goManadeep()}
                    style={[Presets.buttonContainer1, {width: '60%'}]}>
                    <Text style={Presets.colorWhite}>
                        {I18n.t('go_manadeep')}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SelectPayer;
