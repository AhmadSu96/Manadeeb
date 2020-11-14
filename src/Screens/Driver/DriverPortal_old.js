import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, View, Text, Dimensions, TouchableHighlight, TextInputComponent } from 'react-native'
import MapView, { Marker,Polyline } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import Layout from '../../components/layout/Layout';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import Current_location from '../Map_function/Current_location';
import  Directions from'../Map_function/Directions';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

function decode(t,e){
  for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})
} 


export default class Test extends Component {

  state = {
    from: {
      latitude: 25.354826,
      longitude: 51.183884,
    },
    to: {
      latitude: 25.285446,
      longitude: 51.531040,
    },
    Scanedcoords: false,
    firstcoords: false,
    coords:[],

  }

  componentDidMount() {
   
  }

  Directions (from,to) {

    const mode = 'driving'; // 'walking';
    const origin = from.latitude + ',' + from.longitude;
    const destination = to.latitude + ',' + to.longitude;
  
    const APIKEY = 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U';
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;
  
     fetch(url).then(response => response.json())
               .then(responseJson => {
                             if (responseJson.routes.length) {
                              this.setState({coords:decode(responseJson.routes[0].overview_polyline.points)});
                                }
              }).catch(e => {console.warn(e)});
  }

  initialize(description) {

    Geocoder.init("AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U"); // use a valid API key
    Geocoder.from(description)
      .then(json => {
        var location = json.results[0].geometry.location;
      
      
        if(!this.state.firstcoords){
          this.setState({ from: { latitude: location.lat, longitude: location.lng } });
          this.setState({ firstcoords: true });
        }else{
          this.setState({ to: { latitude: location.lat, longitude: location.lng } });
          // this.setState({ coords: {location1:this.state.from,location2:this.state.to}});
          this.setState({ Scanedcoords: true });
          this.Directions(this.state.from,this.state.to)
        }
      })
      .catch(error => console.warn(error));
  }



  render() {
    
    return (
      <Layout>
        <View style={styles.Continar}>
          <View style={{ marginTop: 0 }}>
            {!this.state.firstcoords && <Current_location/>}
            { this.state.firstcoords &&
            <MapView
              style={{ height: height * 0.83, width: width * 1 }}
              initialRegion={{
                latitude: this.state.from.latitude,
                longitude: this.state.from.longitude,
                latitudeDelta: 0.7252,
                longitudeDelta: 0.7251,
              }}
            >
              {this.state.coords &&
                <MapView.Polyline
                coordinates={this.state.coords}
                strokeWidth={2}
                strokeColors={'#7F0000'}
            />
              }
                <Marker
                  coordinate={{
                    latitude: this.state.from.latitude,
                    longitude: this.state.from.longitude
                  }}
                />
                {this.state.Scanedcoords &&
                <Marker
                coordinate={{
                  latitude: this.state.to.latitude,
                  longitude: this.state.to.longitude
                }}
              />
              
                }
            </MapView>
            }
          </View>
          <View style={styles.serchContinar}>
            <GooglePlacesAutocomplete
              placeholder='Search'
              autoFocus={true}
              styles={{
                textInput: {
                  height: 38,
                  color: '#5d5d5d',
                  fontSize: 16,
                },
                predefinedPlacesDescription: {
                  color: '#1faadb',
                },
              }}
              onPress={(data, details = null) => {
                this.initialize(data.description);
              }}
              query={{
                key: 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U',
                language: 'en',
              }}
            />
            <TouchableOpacity onPress={() => this.CurrentLocation}>
              <Icon style={{ paddingTop: 3, paddingLeft: 10 }} name={'my-location'} size={30} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.SubmitContinar}>
            <TouchableOpacity>
              <Text style={styles.Submit}>Where to</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({

  Continar: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    // alignItems:"center",
    // marginTop:-25,
    // paddingTop:"10%",
    borderRadius: 30
  },
  serch: {
    color: 'gray',
    backgroundColor: "#fff",
    padding: 10,
    width: width * 0.75,
    borderRadius: 30
  },
  serchContinar: {
    backgroundColor: "orange",
    width: width * 1,
    paddingLeft: 20,
    marginLeft: -18,
    paddingRight: 10,
    borderRadius: 30,
    paddingTop: 5,
    position: 'absolute',
    flexDirection: "row"
    // top:"10%"
  },
  SubmitContinar: {
    backgroundColor: "#EF5723",
    width: "80%",
    // width:140,
    height: 50,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 15,
    marginLeft: "10%",
    position: 'absolute',
    top: "70%",
  },
  Submit: {
    fontSize: 12,
    paddingTop: 15,
    color: "#fff",
  }
});
