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
// import firebase from "@react-native-firebase/auth";
// import cost from '../Screens/Map_function/Cost';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Order extends Component {

    constructor(props) { 
        super(props)
        
        this.state = {
            data: [],
            Cust:'',
            origin:'',
            destination:'',
        }
      
        var config = {
            apiKey: "AIzaSyAbYn9xm32G6unRoozTTOzvzMr7elyb-3M",
            authDomain: "manadeeb-6d286.firebaseapp.com",
            databaseURL: "https://manadeeb-6d286.firebaseio.com",
            projectId: "manadeeb-6d286",
            storageBucket: "manadeeb-6d286.appspot.com",
            messagingSenderId: "53372339234",
            appId: "1:53372339234:web:2d918a664cbfc347c3b67b",
            measurementId: "G-037SBMGRQB"
         };
      
        if (!firebase.apps.length){
           firebase.initializeApp(config);
           console.log('Good');
        }
      }

      Get_geocode (from,to) {
        const mode = 'driving'; // 'walking';
        const APIKEY = 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U';
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.origin}&destination=${this.state.destination}&key=${APIKEY}&mode=${mode}`;

        Geocoder.init(APIKEY); // use a valid API key
        Geocoder.from(from).then(json => { var location = json.results[0].geometry.location;
                                           this.setState({origin:location.lat + ',' + location.lng});
                                        });
       
       Geocoder.from(to).then(json => { var location = json.results[0].geometry.location;
                                         this.setState({destination:location.lat + ',' + location.lng});
                                       });
        }
     
            
       componentDidMount(){
        if(this.props.data){
            var Data =this.props.data;
            this.setState({data:Data});
        }
        
    }

      
//Sender/Receiver
render() {

   const Data =  this.props.data;
   return (
    <Layout>  
       <View style={styles.Continar}>
            <View style={styles.ItemsContinar}>
                <View style={styles.centeredContinar}>
                     <Text style={styles.Headertext}>FROM</Text>
                     <Text style={styles.Headertext2}>Sender Details</Text>
                </View>
                <View style={styles.centeredContinar}>
                     <Text style={styles.Headertext}>Anas</Text>
                     <Text style={styles.Headertext2}>+974 33 44 55 66 0</Text>
                </View>
                <View style={styles.LocationContinar}>
                     <Text style={styles.Headertext}>{Data.from}</Text>
                </View>
            </View>
            <View style={styles.ItemsContinar}>
                <View style={styles.centeredContinar}>
                     <Text style={styles.Headertext}>TO</Text>
                     <Text style={styles.Headertext2}>Receiver Details</Text>
                </View>
                <View style={styles.centeredContinar}>
                     <Text style={styles.Headertext}>{Data.R_Name}</Text>
                     <Text style={styles.Headertext2}>{Data.R_Phone}</Text>
                </View>
                <View style={styles.LocationContinar}>
                     <Text style={styles.Headertext}>{Data.to}</Text>
                </View>
            </View>
            <View style={styles.ItemsContinar}>
                <View style={styles.PackegContinar}>
                     <Text style={styles.Headertext}>Package Details</Text>
                </View>
                <View style={styles.centeredContinar}>
                     <Text style={styles.Headertext}>{Data.Package}</Text>
                     <Text style={styles.Headertext2}>{Data.Description}</Text>
                </View>
            </View>
                <View style={styles.cost}>
                      <View style={styles.TotalContinar}>
                            <Text style={styles.Total}>Total :{Data.Cust}</Text>
                     </View>
                     <View>
                            <Text style={styles.Total}>Payer is ?</Text>
                     </View>
                </View>
                <View style={styles.type}>
                            <Text style={styles.Total}>Sender</Text>
                            <Text style={styles.Total}>Receiver</Text>
                </View>
                <TouchableOpacity 
                        onPress={() => {Alert.alert("We still working on this page")}} 
                        style={styles.buttonContainer1}
                        >
                        <Text style={styles.Buttum}>GO TO FINAL STEP</Text>
                </TouchableOpacity>
        </View>
    </Layout>
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
    // LocationContinar:{
    //     flexDirection: "row",
    //     backgroundColor:"#FFE4DB",
    //     width:width*0.9,
    //     marginBottom:"3%",
    //     borderRadius:10,
    //     paddingLeft:20,
    //     paddingTop:5,
    //     paddingBottom:5
    // },
    Headertext:{
        color:"#5D4F47",
        fontSize:15,
        fontWeight: 'bold',
        width:width*0.3,
        padding:4,
    },
    Headertext2:{
        color:"#5D4F47",
        fontSize:15,
        width:width*0.5,
        fontWeight: 'bold',
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
        top:"22%",
        left:"10%"
      },
      serchContinar2: {
        width: width * 0.5,
        borderRadius: 30,
        // paddingTop: "50%",
        position: 'absolute',
        top:"53%",
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
        paddingTop:10,
        color:"#fff",
    },
    TotalContinar:{
        borderColor:'#5D4F47',
        borderWidth:1,
        borderRadius:5,
        marginRight:width*0.03,
    },
    Total:{
        fontSize:14,
        color:'#5D4F47',
        fontWeight: 'bold',
        padding:5
    },
    cost:{
        marginRight:width*0.40,
        flexDirection: "row",
    },
    type:{
        paddingTop:15,
        // marginRight:width*0.2,
        flexDirection: "row",
    },
    centeredContinar:{
        flexDirection: "row",
    },
    LocationContinar:{
        paddingLeft:'12%',
    },
    PackegContinar:{
        width:width*0.8
    }

});