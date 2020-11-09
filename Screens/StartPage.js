import React,{useState} from 'react';
import { Dimensions,Image,TouchableOpacity,View, Text, TextInput,StyleSheet, TouchableHighlight, ImageBackground} from 'react-native';
import { Presets } from '../styles';
import Layout from '../components/layout/Layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from '../I18n'
import { color } from 'react-native-reanimated';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


// 0798449809

export default function Register() {

    const [name, onChangeName] = React.useState(null);
    const [user, onChangeUser] = React.useState(null);
    const [Pass, onChangePass] = React.useState(null);

    return (
        
            <ImageBackground  source={require('../assest/img/BG.png')} style={styles.image}>
               <View style={styles.Continar}>
              <View style={styles.TextContinar}>
                        <Text style={styles.text}>Save Hours</Text>
                        <Text style={styles.text2}>at the top of your finger</Text>
                        <Text style={styles.text3}>let's save your time</Text>
                </View>
                <View style={styles.LangContinar}>
                        <Text style={styles.Langtext}>ِArabic</Text>
                        <Text style={styles.Langtext}>English</Text>
                </View>
                <TouchableOpacity onPress={() =>Actions.Login()}style={styles.ButtonContinar1}>
                        <Text style={styles.Buttum}>Sign in with </Text>
                        <Image  source={require('../assest/img/logo.png')} style={{ width:50,height:50}}/>
                 </TouchableOpacity>
                        <TouchableOpacity onPress={() =>Actions.Register()} style={styles.ButtonContinar2}>
                                <Text style={styles.Buttum2}>or, Create a Manadeeb account </Text>
                         </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress={() => Actions.DriverLogin()} style={styles.TextContinar2}>
                        <Image  source={require('../assest/img/logo.png')} style={styles.image2}/>
                        <Text style={styles.text4}>Drivers</Text>
                    </TouchableOpacity>                    
                </View>
              </View>   
            </ImageBackground> 
    );
}


const styles = StyleSheet.create({

    Continar:{
        //  width:width*1,
        // height:height*1,
    },
    image:{
        width:width*1,
        height:height*1,
        marginTop:-20,
        position: 'absolute',
            // top: this.props.cropTop * -1,
            // left: this.props.cropLeft * -1,
            // width: this.props.width,
            // height: this.props.height
    },
    TextContinar:{
        alignItems:"center",
        paddingTop:height*0.45,

    },
    text:{
        fontSize:26,
        color:"#fff",
        fontWeight: 'bold'
    },
    text2:{
        fontSize:26,
        color:"#fff",
    },
    text3:{
        paddingTop:15,
        fontSize:20,
        color:"#5D4F47",
    },
    Buttum:{
        color:"#fff",
    },
    Buttum2:{
        paddingTop:12,
        color:"#fff",
    },
    ButtonContinar1:{
        flexDirection: "row",
        backgroundColor: "#EF5723",
        width: "80%",
        height: 45,
        marginTop: 10,
        alignItems: "center",
        borderRadius: 15,
        marginLeft: "10%",
        paddingLeft:width*0.25,
        // top: "26%",
    },
    ButtonContinar2:{
        backgroundColor: "#EF5723",
        width: "80%",
        height: 45,
        marginTop: 10,
        alignItems: "center",
        borderRadius: 15,
        marginLeft: "10%",
        // top: "12%",
    },
    image2:{
        width:70,
        height:70,
        marginLeft:width*0.35
    },
    TextContinar2:{
        flexDirection: "row",
        alignItems: "center",
        // top: "25%",
    },
    text4:{
        fontSize:20,
        color:"#5D4F47",
        borderBottomColor:"#5D4F47",
        borderBottomWidth:1,
    },
    LangContinar:{
        flexDirection: "row",
        alignItems: "center",
        marginLeft:width*0.10,
        marginTop:height*0.1
    },
    Langtext:{
        padding:5
    },
});