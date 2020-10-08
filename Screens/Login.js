import React,{useState} from 'react';
import { View, Text, TextInput} from 'react-native';
import { Presets } from '../styles';
import Layout from '../components/layout/Layout';

import I18n from '../I18n'

export default function Home() {

    const [value, onChangeText] = React.useState('Useless Placeholder');
    const [value, onChangeText] = React.useState('Useless Placeholder');

    return (
        <Layout>
            <View style={Presets.fullScreen}>
                <View>
                    <TextInput
                        //  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                         onChangeText={text => onChangeText(text)}
                         value={value}
                        />
                </View>
                <View>
                    <TextInput
                        //  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                         onChangeText={text => onChangeText(text)}
                         value={value}
                        />
                </View>
            </View>
         </Layout>
    );
}