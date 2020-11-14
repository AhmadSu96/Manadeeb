import React, {useState} from 'react';
import {Alert, TouchableOpacity, View, Text, TextInput} from 'react-native';
import {Presets} from '../styles';
import Layout from '../components/layout/Layout';

import I18n from '../I18n';
import {Actions} from 'react-native-router-flux';
import {useDispatch} from 'react-redux';
import {setUser} from '../actions';

export default function Login() {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        phone_number: null,
        password: null,
    });

    const handleSubmit = () => {
        dispatch(setUser({role: 'user'}));
    };

    return (
        <Layout>
            <View style={Presets.radiusContainer}>
                <Text
                    style={[
                        Presets.grayHeader,
                        Presets.w140,
                        {paddingTop: 40},
                    ]}>
                    {I18n.t('here_to_get_welcome')}!
                </Text>
                <View style={Presets.container}>
                    <TextInput
                        style={Presets.textInput}
                        onChangeText={(value) =>
                            setData({...data, phone_number: value})
                        }
                        placeholder={I18n.t('phone_number')}
                        value={data.phone_number}
                    />
                    <TextInput
                        secureTextEntry
                        style={Presets.textInput}
                        onChangeText={(value) =>
                            setData({...data, password: value})
                        }
                        placeholder={I18n.t('password')}
                        value={data.password}
                    />
                    <TouchableOpacity
                        style={[Presets.buttonContainer2, Presets.w140]}
                        onPress={() => handleSubmit()}>
                        <Text style={Presets.colorWhite}>
                            {I18n.t('sign_in')}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Presets.w140}
                        onPress={() => Actions.Register()}>
                        <Text style={Presets.grayLink}>
                            {I18n.t('i_dont_have_an_account')}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Presets.w140, {marginTop: 40}]}
                        onPress={() => Actions.DriverLogin()}>
                        <Text style={Presets.grayLink}>
                            {I18n.t('or_sign_in_with_as_driver')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    );
}
