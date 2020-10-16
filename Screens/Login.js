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

export default function Login() {

    const [user, onChangeUser] = React.useState(null);
    const [Pass, onChangePass] = React.useState(null);

    return (
        <Layout>
            <View style={styles.Continar}>
                <View style={styles.TextContinar}>
                    <Text style={styles.Text}>Here To Get Welcome!</Text>
                </View>
                <View style={styles.centeredContinar}>
                    <TextInput
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
                            <Text style={styles.Buttum}>Sign In</Text>
                    </View>
                    <View style={styles.RegisterContinar}>
                    <TouchableOpacity onPress={()=> Actions.Register()}>
                               <Text style={{ fontSize:12,color:"#5D4F47" }}>I don't have an account</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
                <View style={styles.SocialContinar}>
                    <Text style={{ fontSize:20,color:"gray" }}>
                        Or Sign in with
                    </Text>
                    <View style={styles.Social} >
                       <Icon style={{ paddingRight: 35 }} name={'google'} size={30} color="#000" />
                       <Icon style={{ paddingRight: 15 }} name={'facebook'} size={30} color="#3C5A9A" />
                    </View>
                </View>
            </View>
         </Layout>
    );
}


const styles = StyleSheet.create({

    Social:{
        flexDirection: "row",
        paddingTop:"5%"
    },
    TextContinar:{
        paddingRight:"10%",
        paddingTop:"10%",
        paddingLeft:"10%",
    },

    Text:{
        fontSize:30,

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
        marginTop:10,
        alignItems:"center",
        paddingTop:"3%",
    },
    loginContinar:{
        backgroundColor:"#EF5723",
        width:"39%",
        // width:140,
        height:60,
        marginTop:10,
        alignItems:"center",
        borderRadius:15,
        marginLeft:"10%",
    },
    Buttum:{
        fontSize:12,
        paddingTop:20,
        color:"#fff"
    },
    Continar:{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        // alignItems:"center",
        marginTop:-25,
        paddingTop:"10%",
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
        paddingTop:"4%",
    },

    SocialContinar:{
        marginLeft:"12%",
        paddingTop:"14%",
    },
});