import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import {Presets} from '../styles';
import Layout from '../components/layout/Layout';

import I18n from '../I18n';
import {Actions} from 'react-native-router-flux';

export default function Register() {
    const [data, setData] = useState({
        full_name: null,
        phone_number: null,
        password: null,
    });

    const handleSubmit = () => {
        console.log(data);
    };

    return (
        <Layout>
            <View style={Presets.radiusContainer}>
                <Text
                    style={[
                        Presets.grayHeader,
                        {paddingTop: 40, width: '50%'},
                    ]}>
                    {I18n.t('lets_create_your_account')}!
                </Text>
                <View style={Presets.container}>
                    <TextInput
                        style={Presets.textInput}
                        onChangeText={(value) =>
                            setData({...data, full_name: value})
                        }
                        placeholder={I18n.t('full_name')}
                        value={data.full_name}
                    />
                    <TextInput
                        style={Presets.textInput}
                        onChangeText={(value) =>
                            setData({...data, phone_number: value})
                        }
                        placeholder={I18n.t('phone_number')}
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
                    <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={[Presets.buttonContainer2, Presets.w140]}>
                        <Text style={Presets.colorWhite}>
                            {I18n.t('sign_up')}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width: '50%'}}
                        onPress={() => Actions.Login()}>
                        <Text style={Presets.grayLink}>
                            {I18n.t('i_already_have_an_account')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    );
}
