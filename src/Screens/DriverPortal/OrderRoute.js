import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useRef, useState} from 'react';
import {Image, View} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {googleKey} from '../../providers/constants';
import {decodeMapDirections} from '../../providers/helpers';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {Presets} from '../../styles';

function OrderRoute({props}) {
    const [coords, setCoords] = useState(null);

    const [from, setFrom] = useState(null);

    const mapRef = useRef();

    const getMyCurrentLocation = async () => {
        Geolocation.getCurrentPosition((position) => {
            setFrom({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        });
    };

    useEffect(() => {
        if (from != null) {
            drawPath();
        }
    }, [from]);

    useEffect(() => {
        function handleRoute() {
            console.log('re drawing direction');
            getMyCurrentLocation();
        }
        handleRoute();
        const interval = setInterval(() => handleRoute(), 500);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const drawPath = async () => {
        const destination =
            props.destination.latitude + ',' + props.destination.longitude;
        const fromString = from.latitude + ',' + from.longitude;
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${fromString}&destination=${destination}&key=${googleKey}&mode=driving`;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.routes.length) {
                    setCoords(
                        decodeMapDirections(
                            responseJson.routes[0].overview_polyline.points,
                        ),
                    );
                }
            })
            .catch((e) => {
                console.warn('e : ', e);
            });
    };

    const fitToMarker = () => {
        mapRef.current.fitToSuppliedMarkers(['destination', 'from']);
    };

    const fitToFrom = () => {
        mapRef.current.fitToSuppliedMarkers(['from']);
    };

    return (
        <View style={[Presets.alignCenter, {marginTop: 10}]}>
            <View
                style={[
                    Presets.mapViewContainer,
                    {width: '90%', marginTop: 10, height: 400, margin: 0},
                ]}>
                <MapView
                    ref={mapRef}
                    onMapReady={() => fitToMarker()}
                    style={{width: '100%', height: '100%'}}>
                    {/* {from && ( */}
                    <Marker
                        onPress={() => fitToFrom()}
                        identifier="from"
                        coordinate={from}
                        title={I18n.t('me')}>
                        {/* <Image
                            style={{width: 25, height: 25}}
                            resizeMode="contain"
                            source={require('../../assest/img/driver-arrow.png')}
                        /> */}
                    </Marker>
                    {/* )} */}
                    <Marker
                        identifier="destination"
                        coordinate={props.destination}
                    />
                    {coords && (
                        <Polyline
                            // key="polyline"
                            key={coords}
                            strokeWidth={5}
                            strokeColor={colors.orange}
                            coordinates={coords}
                        />
                    )}
                </MapView>
            </View>
        </View>
    );
}

export default OrderRoute;
