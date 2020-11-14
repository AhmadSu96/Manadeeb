import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Get_coordinate from './GeoCode'
import Geocoder from 'react-native-geocoding';
import { Actions } from 'react-native-router-flux';

function Get_coordinate(description) {

  Geocoder.init("AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U"); // use a valid API key
  Geocoder.from(description)
    .then(json => {
      var location = json.results[0].geometry.location;
      Actions.DriverPortal({coords:[location.lat,location.lng]});
    })
    .catch(error => console.warn(error));
}

const GooglePlacesInput = () => {
  return (
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
                Get_coordinate(data.description);
              }}
              query={{
                key: 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U',
                language: 'en',
              }}
            />
  );
};
 
export default GooglePlacesInput;