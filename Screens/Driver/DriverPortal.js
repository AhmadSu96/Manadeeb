// import React,{useState} from 'react';
// import { Dimensions,TouchableOpacity,View, Text, TextInput,StyleSheet, TouchableHighlight, Platform} from 'react-native';
// import { Presets } from '../../styles';
// import Layout from '../../components/layout/Layout';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MapView from 'react-native-maps';
// import MapboxGL from "@react-native-mapbox-gl/maps";
// MapboxGL.setAccessToken("pk.eyJ1Ijoic3VnaGFpciIsImEiOiJja2dhdG80em4wNjk3Mnh0aTlkYTMyN20yIn0.O06A55zffLE1kd-xagCuDA");

// import I18n from '../../I18n'
// import { color } from 'react-native-reanimated';
// // import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Actions } from 'react-native-router-flux';

// const { width, height } = Dimensions.get("screen");
// const IS_Android = Platform.OS==='android';

// // 0798449809
// export default class DriverPortal extends Comment () {

//     async UNSAFE_componentsWillMount(){
//         if(IS_Android){
//             const isGranted=await MapboxGL.requestAndroidLocationPermissions();
//             this.setState({
//                 isAndroidPermissionGranted: isGranted,
//                 isFetchingAndroidPermission: false,
//             })
//         }
//       }
    
//       constructor(props){
//         super(props);
//         this.state={
//                     isAndroidPermissionGranted:false,
//                     isFetchingAndroidPermission:IS_Android,
//                     coordinates:[-122.084990,37.426929],
//                     showUserLocation:true
//                     }
    
//         }
// render(){
//     return (
//         <Layout>
//             <View style={styles.Continar}>
//                <View style={styles.ButtumContinar}>
//                     <View style={styles.loginContinar}>
//                             <Text style={styles.Buttum}>Previous orders</Text>
//                     </View>
//                     <View style={styles.loginContinar}>
//                             <Text style={styles.Buttum}>Profile</Text>
//                     </View>
//                     <View style={styles.loginContinar}>
//                             <Text style={styles.Buttum}>My Rate</Text>
//                     </View>
//                </View>
//                <View>
//                         <MapboxGL.MapView 
//                             style={styles.map}
//                             ref={c=>this._map=c}
//                             zoomLevel={14}
//                             centerCoordinate={this.state.coordinates[0]}
//                             showUserLocation={true}
//                             userTrackingMode={this.state.userTrackingMode}
//                             >
//                         <MapboxGL.Camera
//                                 zoomLevel={16}
//                                 animationMode={'flyTo'}
//                                 animationDuration={0}
//                                 ref={}
//                                 centerCoordinate={this.state.location}
//                         >
//                         </MapboxGL.Camera>
//                         <MapboxGL.UserLocation>

//                         </MapboxGL.UserLocation>
//                         </MapboxGL.MapView>
//                </View>
//             </View>
//          </Layout>
//     );
// }
// }


// const styles = StyleSheet.create({

//     ButtumContinar:{
//         flexDirection: "row",
//         paddingTop:"5%"
//     },
   
//     loginContinar:{
//         backgroundColor:"#EF5723",
//         // width:"15%",
//         width:100,
//         height:45,
//         // marginTop:10,
//         alignItems:"center",
//         borderRadius:7,
//         marginLeft:"3%",
//     },
//     Buttum:{
//         fontSize:12,
//         paddingTop:15,
//         color:"#fff"
//     },
//     Continar:{
//         height: '100%',
//         width: '100%',
//         backgroundColor: '#fff',
//         // alignItems:"center",
//         marginTop:-25,
//         paddingTop:"5%",
//         borderRadius:30
//     },
//     map: {
//         flex: 1
//       }
   
// });