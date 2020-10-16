import React,{useState} from 'react';
import { Image,TouchableOpacity,View, Text, TextInput,StyleSheet, TouchableHighlight} from 'react-native';
import { Presets } from '../../styles';
import Layout from '../../components/layout/Layout';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from '../../I18n'
import { color } from 'react-native-reanimated';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

// 0798449809
// Drivir.png

export default function DriverLogin() {

    const [user, onChangeUser] = React.useState(null);
    const [Pass, onChangePass] = React.useState(null);

    return (
        <Layout>
            <View style={styles.Continar}>
                <View style={styles.TextContinar}>
                    <Image source={require('../../assest/img/Drivir.png')} style={styles.Image}/>
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
                    <Text style={{ fontSize:15,color:"#5D4F47" }}>
                        our drivrs is second to none
                    </Text>
                    <Text style={{ fontSize:15,color:"#5D4F47" }}> 
                        to be one of our part please contact us
                    </Text>
                    <Text style={{ paddingTop:"5%",fontSize:29,color:"gray" }}>
                        +974 33 44 55 66 0
                    </Text>
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
        // marginTop:5,
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
        paddingTop:"4%",
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
        paddingTop:"5%",
    },
    Image:{
        width:"100%",
        height:185,
    },
});