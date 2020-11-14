import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, PermissionsAndroid} from 'react-native';
import Geocoder from 'react-native-geocoding';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker} from 'react-native-maps';
import {Actions} from 'react-native-router-flux';
import {useDispatch, useSelector} from 'react-redux';
import {Presets} from '../../styles';
import {setFrom, setTo} from '../../actions/index';
import {dohaGeo, googleKey} from '../../providers/constants';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';

const mapStyles = {
    textInput: {
        height: '100%',
        borderWidth: 1,
        borderColor: colors.orange,
        borderRadius: 25,
    },
    listView: {},
    container: {},
};

function MapSearch({props}) {
    const location = useSelector((state) => state.app[props.name]);

    const dispatch = useDispatch();

    const mapRef = useRef();
    const googlePlacesRef = useRef();

    const fitToMarker = () => {
        mapRef.current.fitToSuppliedMarkers(['locationMarker']);
    };

    const getPlaceName = async (latitude, longitude) => {
        const response = await fetch(
            'https://maps.googleapis.com/maps/api/geocode/json?address=' +
                latitude +
                ',' +
                longitude +
                '&key=' +
                googleKey,
        );
        const placeName = await response
            .json()
            .then((json) => json.results[0].formatted_address);
        return placeName;
    };

    const getMyCurrentLocation = async () => {
        Geolocation.getCurrentPosition(async (position) => {
            const placeName = await getPlaceName(
                position.coords.latitude,
                position.coords.longitude,
            );
            const region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                placeName: placeName,
            };
            if (props.name == 'from') {
                dispatch(setFrom(region));
            } else if (props.name == 'to') {
                dispatch(setTo(region));
            } else if (props.name == 'personLocation') {
                props.setPersonLocation(region);
            } else if (props.name == 'driverLocation') {
                props.setDriverLocation(region);
            }
            Actions.pop({animated: true});
        });
    };

    useEffect(() => {
        if (location && location.placeName) {
            googlePlacesRef.current.setAddressText(location.placeName);
        }
    }, []);

    const getGeo = (place) => {
        Geocoder.init(googleKey);
        Geocoder.from(place)
            .then((json) => {
                console.log('json : ', json);
                const locationData = {
                    latitude: json.results[0].geometry.location.lat,
                    longitude: json.results[0].geometry.location.lng,
                    placeName: place,
                };
                if (props.name == 'from') {
                    dispatch(setFrom(locationData));
                } else if (props.name == 'to') {
                    dispatch(setTo(locationData));
                } else if (props.name == 'personLocation') {
                    props.setPersonLocation(locationData);
                } else if (props.name == 'driverLocation') {
                    props.setDriverLocation(locationData);
                }
                Actions.pop({animated: true});
            })
            .catch((error) => console.warn(error));
    };

    return (
        <View style={[Presets.flex1, {position: 'relative'}]}>
            <MapView
                style={{height: '100%'}}
                ref={mapRef}
                initialRegion={dohaGeo}
                onMapReady={() => fitToMarker()}>
                {location && (
                    <Marker identifier="locationMarker" coordinate={location} />
                )}
                {props.location && (
                    <Marker
                        identifier="locationMarker"
                        coordinate={props.location}
                    />
                )}
            </MapView>
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    zIndex: 2,
                    width: '100%',
                    padding: 20,
                }}>
                <GooglePlacesAutocomplete
                    ref={googlePlacesRef}
                    styles={mapStyles}
                    query={{
                        key: googleKey,
                        language: 'en',
                    }}
                    GooglePlacesDetailsQuery={{fields: 'geometry'}}
                    onPress={(data, details = null) =>
                        getGeo(details.description)
                    }
                />
                <TouchableOpacity
                    onPress={() => getMyCurrentLocation()}
                    style={{marginTop: 10}}>
                    <Icon name="compass" size={40} color={colors.orange} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MapSearch;
