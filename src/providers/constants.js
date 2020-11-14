import {Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

export const googleKey = 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U';

export const dohaGeo = {
    latitude: 25.285446,
    longitude: 51.53104,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

export const ammanGeo = {
    latitude: 31.9225856,
    longitude: 35.9268352,
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034,
};

const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 60;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
