import Geolocation from '@react-native-community/geolocation';
import MapView, {Callout,Marker,Polyline } from 'react-native-maps';
import React, {useState, useEffect} from 'react';
import { StyleSheet,Dimensions ,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Current_location (){

    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height

    const [latitude, setlatitude] = useState();
    const [longitude, setlongitude] = useState();

    useEffect(() => {
        Geolocation.getCurrentPosition(data => {
            setlatitude(data.coords.latitude);
            setlongitude(data.coords.longitude);
  
          }).catch(error => {
            setlatitude(25.354826);
            setlongitude(51.183884);
          });
      }, []);
     
        
     return (
        <MapView
        style={{ height: height * 0.83, width: width * 1 }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0252,
          longitudeDelta: 0.0251,
        }}
        >
          <Marker
               coordinate={{
                latitude: latitude,
                longitude: longitude,
               }}
         >
           <Icon style={{ paddingTop: 3, paddingLeft: 10 }} name={'person-pin'} size={30} color="#000" />
         </Marker>
      </MapView>
          
        )
    }