import Geocoder from 'react-native-geocoding';


Geocoder.init("AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U"); // use a valid API key

 
Geocoder.from("Irbid, Jordan")
        .then(json => {
            var location = json.results[0].geometry.location;
            console.log(location);
        })
        .catch(error => console.warn(error));