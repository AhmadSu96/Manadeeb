import React, { Component } from 'react'
import { 
Picker,
TouchableOpacity,
View, 
Text, 
TextInput,
StyleSheet, 
Dimensions, 
ImageBackground,
ScrollView,
KeyboardAvoidingView,
Alert
} from 'react-native';
import { Presets } from '../styles';
import Layout from '../components/layout/Layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker,Polyline } from 'react-native-maps';
import I18n from '../I18n'
import { color } from 'react-native-reanimated';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Actions } from 'react-native-router-flux';
import Test from './Driver/DriverPortal_old';
import firebase from '@react-native-firebase/app';
import Geocoder from 'react-native-geocoding';
import PhoneInput from "react-native-phone-number-input";
// import firebase from "@react-native-firebase/auth";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const GooglePlacesInput = () => {
    return (
      <GooglePlacesAutocomplete
                placeholder='Search'
                styles={{
                  textInput: {
                    height: 25,
                    fontSize: 13,
                  },
                }}
                onPress={(data, details = null) => {
                    // this.setState({});
                }}
                query={{
                  key: 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U',
                  language: 'en',
                }}
              />
    );
};

const Maps = () => {
    return (
        <MapView
                      style={{left:10,height: height * 0.155, width: width * 0.30 }}
                      initialRegion={{
                        latitude: 25.354826,
                        longitude: 51.183884,
                        latitudeDelta: 0.9252,
                        longitudeDelta: 0.9251,
                     }}
         />
    )};


export default class Order extends Component {

    constructor(props) { 
        super(props)
        
        this.state = {
            from: null,
            to : null,
            R_Name:'',
            R_Phone:'',
            Package:'',
            Description:'',
            Cust:'',
            origin:'',
            destination:'',
            fromLoc: {
                latitude: '',
                longitude: '',
              },
              toLoc: {
                latitude: '',
                longitude: '',
              },
        }
      }

      Get_geocode (from,to) {

        const APIKEY = 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U';
        Geocoder.init(APIKEY); // use a valid API key
        Geocoder.from(from).then(json => { var location = json.results[0].geometry.location;
                                           this.setState({origin:location.lat + ',' + location.lng});
                                        }).catch(error => console.warn(error));
       
       Geocoder.from(to).then(json => { var location = json.results[0].geometry.location;
                                         this.setState({destination:location.lat + ',' + location.lng});
                                       }).catch(error => console.warn(error));

      }

      Get_length(){
        
        const mode = 'driving'; // 'walking';
        const APIKEY = 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U';
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.origin}&destination=${this.state.destination}&key=${APIKEY}&mode=${mode}`;
     
        fetch(url).then(response => response.json())
               .then(responseJson => {
                             if (responseJson.routes.length) {
                                 var val =  responseJson.routes[0].legs[0].distance.value;
                                 if (val < 10000) { this.setState({Cust :"30 QAR"}); } else
                                 if (val > 11000 && val < 25000) { this.setState({Cust :"45 QAR"}); } else
                                 if (val > 24000 && val < 56000) { this.setState({Cust :"65 QAR"}); } else
                                 if (val > 55000) { this.setState({Cust :"100 QAR"}); }
                                 Actions.ShowOrder({data:this.state});
                                }
              }).catch(e => {console.warn(e)});
            
    
       }

      GetData(){
        if (!this.state.R_Name || !this.state.R_Phone || !this.state.from && !this.state.to && !this.state.Package && !this.state.Description) {
            Alert.alert(
              'Notice',
              'All fields are required!',
              [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
              { cancelable: false },
      
            );
      
          }else{
            this.Get_geocode(this.state.from,this.state.to);
            setTimeout(() => {this.Get_length()}, 1000)
            
            // console.log(this.state);
              
          }
      }


render() {
   return (
    // <Layout>  
        <KeyboardAvoidingView    behavior="padding"  enabled>
        <View style={styles.Continar}>
            <View style={styles.ItemsContinar}>
                <Text style={styles.Headertext2}>Receiver Details</Text>
                <View>
                    <TextInput
                         style={styles.centered}
                         onChangeText={text => this.setState({R_Name:text})}
                         placeholder="Full Name:"
                         value={this.state.R_Name}
                        />
                </View>
                <View style={styles.centeredContinar}>
                        <PhoneInput
                             defaultValue={this.state.R_Phone}
                             defaultCode="QA"
                             containerStyle={{height:65}}
                             onChangeText={text => this.setState({R_Phone:text})}
                             withShadow
                          />
                </View>
            </View>
            <View style={styles.LocationContinar}>
               <View>
                     <Text style={styles.Headertext}>Receiver Location</Text>
                 {this.state.from !== null && 
                   <Text style={{fontSize:15 ,paddingTop:60,color: "#5D4F47"}}>{this.state.from}</Text>
                 }
               </View>
               <View>
                    <Maps/>
                   {/* { this.state.from && <MapsAddress/>}  */}
               </View>
               
            </View>
            <View style={styles.LocationContinar}>
               <View>
                     <Text style={styles.Headertext}>My Location</Text>
                     {this.state.to !== null && <Text style={{fontSize:15 ,paddingTop:60,color: "#5D4F47"}} >{this.state.to}</Text>}
               </View>
               <View>
                   <Maps/> 
               </View>
            </View>
             <View style={styles.ItemsContinar}>
               <Text style={styles.Headertext2}>Package Details</Text>
               <Picker
                    selectedValue={this.state.Package}
                    style={{width:width*0.8,borderWidth:1,borderColor:"#000"}}
                    onValueChange={ItemValue => this.setState({Package:ItemValue})}
                    >
                   <Picker.Item label="Package   - - - - - - - - - - - - - - - - " value=""/>
                   <Picker.Item label="Clothes" value="Clothes"/>
                   <Picker.Item label="Food" value="Food"/>
                   <Picker.Item label="Documents" value="Documents"/>
                   <Picker.Item label="Gifts" value="Gifts"/>
                   <Picker.Item label="Electronic devices" value="Electronic devices"/>
                   <Picker.Item label="Heavy weights" value="Heavy weights"/>
               </Picker>
                <TextInput
                         style={styles.centered2}
                         onChangeText={text => this.setState({Description:text})}
                         placeholder="Comments/discrip"
                         value={this.state.Description}
                        />
            </View>
              <TouchableOpacity 
                        onPress={() => this.GetData()} 
                        style={styles.buttonContainer1}
                        >
                        <Text style={styles.Buttum}>GO TO FINAL STEP</Text>
                </TouchableOpacity>
            <View style={styles.serchContinar}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    styles={{
                        textInput: {
                            height: 40,
                            fontSize: 15,
                        },
                     }}
                    onPress={(data, details = null) => {
                        this.setState({from:data.description});
                    
                    }}
                    query={{
                        key: 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U',
                        language: 'en',
                    }}
              />
            </View>
            <View style={styles.serchContinar2}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    styles={{textInput: {
                                        height: 40,
                                        fontSize: 15,
                                        },
                            }}
                    onPress={(data, details = null) => {
                              this.setState({to:data.description});
                             }}
                    query={{
                        key: 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U',
                        language: 'en',
                    }}
                />
            </View>
        </View>
        </KeyboardAvoidingView>
    // </Layout>
    );
    }
}


const styles = StyleSheet.create({

    Continar:{
        alignItems:"center",
        paddingTop:"5%",
        height:height*1.3,
    },
    ItemsContinar:{
        backgroundColor:"#FFE4DB",
        width:width*0.90,
        marginBottom:"3%",
        borderRadius:10,
        paddingBottom:10,
        paddingTop:8,
        paddingLeft:5,
        alignItems:"center",
        
    },
    LocationContinar:{
        flexDirection: "row",
        backgroundColor:"#FFE4DB",
        width:width*0.9,
        marginBottom:"3%",
        borderRadius:10,
        paddingLeft:20,
        paddingTop:5,
        paddingBottom:5
    },
    Headertext:{
        color:"#5D4F47",
        fontSize:18,
        fontWeight: 'bold',
        width:width*0.5,
    },
    Headertext2:{
        color:"#5D4F47",
        fontSize:18,
        fontWeight: 'bold',
        width:width*0.8,
    },
    centered:{
        backgroundColor:'#fff',
        marginTop:"3%",
        borderColor:"#5D4F47",
        borderWidth:0.5,
        borderRadius:5,
        height:37,
        fontSize:10,
        width:width*0.80,
    },
    centered2:{
        backgroundColor:'#fff',
        marginTop:"3%",
        borderColor:"#5D4F47",
        borderWidth:0.5,
        borderRadius:5,
        height:62,
        fontSize:10,
        width:width*0.80,
    },
    serchContinar: {
        width: width * 0.5,
        borderRadius: 30,
        // paddingTop: "50%",
        position: 'absolute',
        top: height*0.33 ,
        left:"10%"
      },
      serchContinar2: {
        width: width * 0.5,
        borderRadius: 30,
        // paddingTop: "50%",
        position: 'absolute',
        top: height*0.52 ,
        left:"10%"
      },
      buttonContainer1:{
        backgroundColor: "#EF5723",
        width: "70%",
        height: 45,
        marginTop: 10,
        alignItems: "center",
        borderRadius: 45,
    },
    Buttum:{
        fontSize:17,
        paddingTop:10,
        color:"#fff",
    },
    centeredContinar:{
        paddingTop:"2%"
    },
}); 