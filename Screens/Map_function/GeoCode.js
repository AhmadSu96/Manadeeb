import Geocoder from 'react-native-geocoding';
import React, {useState, useEffect} from 'react';
import { Marker,Polyline } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';

export default function Get_coordinate(description) {
        const [latitude, setlatitude] = useState();
        const [longitude, setlongitude] = useState();
      
        Geocoder.init("AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U"); // use a valid API key
        Geocoder.from(description)
          .then(json => {
            var location = json.results[0].geometry.location;
          
            setlatitude(location.lat);
            setlongitude(location.lng );
          })
          .catch(error => console.warn(error));

         Actions.DriverPortal({coords:latitude,longitude});

      }