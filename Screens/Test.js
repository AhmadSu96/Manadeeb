import Geocoder from 'react-native-geocoding';


Geocoder.init("AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U"); // use a valid API key

 
Geocoder.from("Colosseum")
        .then(json => {
            var location = json.results[0].geometry.location;
            console.log(location);
        })
        .catch(error => console.warn(error));
 
Geocoder.from(41.89, 12.49)
        .then(json => {
        		var addressComponent = json.results[0].address_components[0];
            console.log(addressComponent);
        })
        .catch(error => console.warn(error));
 

 
// location object
Geocoder.from({
    latitude : 41.89,
    longitude : 12.49
});
 
// latlng object
Geocoder.from({
    lat : 41.89,
    lng : 12.49
});
 
// array
Geocoder.from([41.89, 12.49]);