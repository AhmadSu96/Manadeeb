import React, {useState} from 'react';
import {Image, TouchableOpacity, View, Text, TextInput} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';

import {Actions} from 'react-native-router-flux';

import I18n from '../../I18n';
import colors from '../../styles/colors';
import {useDispatch} from 'react-redux';
import {setUser} from '../../actions';

export default function DriverLogin() {
    const [data, setData] = useState({
        phone_number: null,
        password: null,
    });

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(setUser({role: 'driver', user_id: 2}));
    };

    return (
        <Layout>
            <View style={Presets.radiusContainer}>
                <Image
                    source={require('../../assest/img/Drivir.png')}
                    style={{width: '100%', height: 185}}
                />
                <View style={Presets.container}>
                    <TextInput
                        style={Presets.textInput}
                        onChangeText={(value) =>
                            setData({...data, phone_number: value})
                        }
                        placeholder={I18n.t('manadeep_driver_phone_number')}
                        value={data.phone_number}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={Presets.textInput}
                        onChangeText={(value) =>
                            setData({...data, password: value})
                        }
                        placeholder={I18n.t('password')}
                        value={data.password}
                    />
                </View>
                <View style={Presets.px10}>
                    <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={[
                            Presets.buttonContainer2,
                            {width: 140, marginTop: 5},
                        ]}>
                        <Text style={Presets.colorWhite}>
                            {I18n.t('signin')}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width: 140, marginTop: 10}}
                        onPress={() => Actions.Register()}>
                        <Text style={Presets.colorGrayLink}>
                            {I18n.t('i_dont_have_an_account')}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={Presets.container}>
                    <Text style={Presets.colorGrayLink}>
                        {I18n.t('our_drivrs_is_second_to_none')}
                    </Text>
                    <Text style={Presets.colorGrayLink}>
                        {I18n.t('to_be_one_of_our_part_please_contact_us')}
                    </Text>
                    <Text
                        style={{
                            paddingTop: 10,
                            fontSize: 26,
                            color: colors.grayLink,
                        }}>
                        +974 33 44 55 66 0
                    </Text>
                </View>
            </View>
        </Layout>
    );
}
