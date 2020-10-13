import React,{useState} from 'react';
import { View, Text, TextInput,StyleSheet} from 'react-native';
import { Presets } from '../styles';
import Layout from '../components/layout/Layout';

import I18n from '../I18n'
import { color } from 'react-native-reanimated';

// 0798449809

export default function Register() {

    const [User, onChangeUser] = React.useState(null);
    const [Pass, onChangePass] = React.useState(null);
    const [ConfirmPass, onChangeConPass] = React.useState(null);
    const [Email, onChangeEmail] = React.useState(null);
    const [Phone, onChangePhone] = React.useState(null);

    return (
        <Layout>
            <View style={styles.Continar}>
                <View style={styles.centeredContinar}>
                    <TextInput
                         style={styles.centered}
                         onChangeText={text => onChangeUser(text)}
                         placeholder="  Username"
                         value={User}
                        />
                </View>
                <View style={styles.centeredContinar}>
                    <TextInput
                        secureTextEntry
                         style={styles.centered}
                         onChangeText={text => onChangePass(text)}
                         placeholder=" Password"
                         value={Pass}
                        />
                </View>
                <View style={styles.centeredContinar}>
                    <TextInput
                         secureTextEntry
                         style={styles.centered}
                         onChangeText={text => onChangeConPass(text)}
                         placeholder=" Confirm Password"
                         value={ConfirmPass}
                        />
                </View>
                <View style={styles.centeredContinar}>
                    <TextInput
                         style={styles.centered}
                         onChangeText={text => onChangeEmail(text)}
                         placeholder="  Email"
                         value={Email}
                        />
                </View>
                <View style={styles.centeredContinar}>
                    <TextInput
                         style={styles.centered}
                         onChangeText={text => onChangePhone(text)}
                         placeholder="  Phone"
                         value={Phone}
                        />
                </View>
                <View style={styles.ButContinar}>
                    <View style={styles.loginContinar}>
                            <Text style={styles.Buttum}>Register</Text>
                    </View>
                </View>
            </View>
         </Layout>
    );
}


const styles = StyleSheet.create({
    centered: {
        height: 50, 
        // borderColor: 'gray', 
        // borderWidth: 1, 
        width:"80%",
        backgroundColor:"#fff",
        // borderRadius:15,

    },
    centeredContinar:{
        width:"100%",
        marginTop:10,
        alignItems:"center",
    },
    loginContinar:{
        backgroundColor:"rgba(156,69,0,0.5)",
        width:"80%",
        height:50,
        marginTop:15,
        alignItems:"center",
        // borderRadius:15,
    },
    Buttum:{
        fontSize:20,
        paddingTop:8,
        color:"#fff"
    },
    Continar:{
        height: '100%',
        width: '100%',
        backgroundColor: '#ff6100',
        alignItems:"center",
        // paddingTop:150
    },
    ButContinar:{
        height: '100%',
        width: '100%',
        alignItems:"center",
        marginTop:30
    }
});