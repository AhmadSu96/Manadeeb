// import React, { Component } from 'react'
// import { StyleSheet,TouchableOpacity,TextInput,View, Text, Dimensions, TouchableHighlight, TextInputComponent } from 'react-native'
// import MapView ,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';
// import { Actions } from 'react-native-router-flux';
// import Layout from '../../components/layout/Layout';

// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// import Geolocation from '@react-native-community/geolocation';


// //
// //

// const width = Dimensions.get('window').width 
// const height = Dimensions.get('window').height

// const columbusCircleCoordinates = [
//     25.354826, 51.183884
// ];

// export default class Test extends Component {

//   state = {
//     latitude: 25.285446,
//     longitude: 51.531040,
//     coordinates: {
//       latitude: 25.196647,
//       latitudeDelta: 1.0922,
//       longitudeDelta: 1.0421,
//       longitude: 51.2322,
//   },
//   }

//   componentDidMount(){
     
//     if(this.props.data){
//       this.setState({latitude:this.props.data.lat});
//       this.setState({longitude:this.props.data.lng});
    
//     }else{
//       Geolocation.getCurrentPosition(data =>{
//         this.setState({latitude:data.coords.latitude});
//         this.setState({longitude:data.coords.longitude});
//       }); 

//     }
   
// }

//     render() {
//       // console.log(this.props);
//       return (
//         <Layout>
//             <View style={styles.Continar}>
//                 <View style={{ marginTop:0}}>
//                       <MapView 
//                         provider={PROVIDER_GOOGLE}
//                         style={{ height:height*0.83,width:width*1  }}
//                         region={this.state.coordinates}

                        

//                         // onDragEnd={(e) => this.setState({ coordinates: e })} 
//                     >
//                         <Marker.Animated
//                             coordinate={this.state.coordinates}
//                             onRegionChangeComplete={result => this.setState({ coordinates: result })}
//                         />

//                     </MapView>
//                 </View>
//                 <View style={styles.serchContinar}>
//                        <TouchableOpacity onPress={()=> Actions.search_location()}> 
//                            <Text style={styles.serch}>Search</Text>
//                       </TouchableOpacity> 
//                 </View>
//             </View>
//          </Layout>
//         )
//     }
// }

// const styles = StyleSheet.create({

//   Continar:{
//     height: '100%',
//     width: '100%',
//     backgroundColor: '#fff',
//     // alignItems:"center",
//     // marginTop:-25,
//     // paddingTop:"10%",
//     borderRadius:30
// },
// serch:{
//   color:'gray', 
//   backgroundColor:"#fff",
//   padding:10,
//   width:width*0.75,
//   borderRadius:30
// },
// serchContinar:{
//   backgroundColor:"orange",
//   width:width*0.85,
//   marginTop:-90,
//   padding:1,
//   borderRadius:30
// }
// });