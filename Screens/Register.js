import React,{useState} from 'react';
import { TouchableOpacity,View, Text, TextInput,StyleSheet, TouchableHighlight} from 'react-native';
import { Presets } from '../styles';
import Layout from '../components/layout/Layout';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from '../I18n'
import { color } from 'react-native-reanimated';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

// 0798449809

export default function Register() {

    const [name, onChangeName] = React.useState(null);
    const [user, onChangeUser] = React.useState(null);
    const [Pass, onChangePass] = React.useState(null);

    return (
        <Layout>
            <View style={styles.Continar}>
                <View style={styles.TextContinar}>
                    <Text style={styles.Text}>Let's Create Your Account!</Text>
                </View>
                <View style={styles.centeredContinar}>
                    <TextInput
                         style={styles.centered}
                         onChangeText={text => onChangeName(text)}
                         placeholder="Full Name"
                         value={name}
                        />
                </View>
                <View style={styles.centeredContinar}>
                    <TextInput
                        secureTextEntry
                         style={styles.centered}
                         onChangeText={text => onChangeUser(text)}
                         placeholder="Phone Number"
                         value={user}
                        />
                </View>
                <View style={styles.centeredContinar}>
                    <TextInput
                        secureTextEntry
                         style={styles.centered}
                         onChangeText={text => onChangePass(text)}
                         placeholder="Password"
                         value={Pass}
                        />
                </View>
                <View style={styles.ButContinar}>
                    <View style={styles.loginContinar}>
                            <Text style={styles.Buttum}>Sign Up</Text>
                    </View>
                    <View style={styles.RegisterContinar}>
                        <TouchableOpacity onPress={()=> Actions.Login()}>
                               <Text style={{ fontSize:15,color:"#5D4F47" }}>I already have an account</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
                {/* <View style={styles.SocialContinar}>
                    <Text style={{ fontSize:14,color:"#5D4F47" }}>
                        Or Sign in with
                    </Text>
                    <View style={styles.Social} >
                       <Icon style={{ paddingRight: 35 }} name={'google'} size={25} color="#000" />
                       <Icon style={{ paddingRight: 15 }} name={'facebook'} size={25} color="#3C5A9A" />
                    </View>
                </View> */}
            </View>
         </Layout>
    );
}


const styles = StyleSheet.create({

    Social:{
        flexDirection: "row",
        paddingTop:"10%"
    },
    TextContinar:{
        paddingRight:"40%",
        paddingTop:"13%",
        paddingLeft:"10%",
        marginBottom:"5%",
    },

    Text:{
        fontSize:24,
        color:"#5D4F47",
        fontWeight:'bold',

    },

    centered: {
        height: 50, 
        // borderColor: 'gray', 
        // borderWidth: 1, 
        width:"80%",
        backgroundColor:"#fff",
        // borderRadius:15,
        borderBottomColor:"gray",
        borderBottomWidth:0.5,
        

    },
    centeredContinar:{
        width:"100%",
        // marginTop:10,
        alignItems:"center",
        paddingTop:"3%",
    },
    loginContinar:{
        backgroundColor:"#EF5723",
        width:"39%",
        // width:140,
        height:60,
        marginTop:15,
        alignItems:"center",
        borderRadius:15,
        marginLeft:"10%",
    },
    Buttum:{
        fontSize:18,
        paddingTop:15,
        color:"#fff"
    },
    Continar:{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        // alignItems:"center",
        marginTop:-25,
        paddingTop:"5%",
        borderRadius:30
    },
    ButContinar:{
        // height: '100%',
        width: '100%',
        // alignItems:"center",
        marginTop:20
    },
    RegisterContinar:{
        marginLeft:"12%",
        paddingTop:"7%",
    },

    SocialContinar:{
        marginLeft:"12%",
        paddingTop:"8%",
    },
});