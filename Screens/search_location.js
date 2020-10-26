import React from 'react';
import {View} from 'react-native'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Actions } from 'react-native-router-flux';
import Geocoder from 'react-native-geocoding';
import react from 'react';

function initialize(description) {
 
  Geocoder.init("AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U"); // use a valid API key
  Geocoder.from(description)
        .then(json => {
            var location = json.results[0].geometry.location;
           
            console.log(location);
            Actions.DriverPortal ({data:location});


        })
        .catch(error => console.warn(error));
}




const GooglePlacesInput = () => {
  return (
        <GooglePlacesAutocomplete
      placeholder='Search'
      autoFocus={true}
      styles={{textInputContainer: {
                  backgroundColor: 'grey',
               },
               textInput: {
                     height: 38,
                     color: '#5d5d5d',
                     fontSize: 16,
                },
              predefinedPlacesDescription: {
                     color: '#1faadb',
              },}}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data.description);
        initialize(data.description);
      }}
      query={{
        key: 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;