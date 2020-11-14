import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {ammanGeo, dohaGeo} from '../../providers/constants';
import {Presets} from '../../styles';
import I18n from '../../I18n';

import {allOrders} from '../../test_data/allOrders';
import {Actions} from 'react-native-router-flux';
import colors from '../../styles/colors';

import FirebaseSetup from '../../Firebase/index';
import database from '@react-native-firebase/database';
import Geolocation from '@react-native-community/geolocation';

function DriverPortal({props}) {
    const mapRef = useRef();

    const fitToMarker = () => {
        let markersIds = markers.map(({id}) => id);
        markersIds.push('MyLocation');
        mapRef.current.fitToSuppliedMarkers(markersIds);
    };

    const [markers, setMarkers] = useState([]);
    const [myLocation, setMyLocation] = useState(null);
    const [status, setStatus] = useState('loading');

    const getMyCurrentLocation = async () => {
        Geolocation.getCurrentPosition((position) => {
            setMyLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            setStatus('success');
        });
    };

    useEffect(() => {
        getMyCurrentLocation();
        const ordersRef = database().ref('orders');
        ordersRef.on('value', (querySnapShot) => {
            let orders = [];
            const items = querySnapShot.val();
            Object.keys(items).map((idx) => {
                let newObject = items[idx];
                if (newObject.orderStatus == 'processing') {
                    newObject.id = idx;
                    orders.push(newObject);
                }
            });
            setMarkers(orders);
        });
    }, []);

    useEffect(() => {
        fitToMarker();
        console.log(markers);
    }, [markers]);

    useEffect(() => {
        fitToMarker();
        console.log('myLocation : ', myLocation);
    }, [myLocation]);

    return (
        <View
            style={[
                Presets.mapViewContainerFull,
                {height: 400, marginTop: 20},
            ]}>
            <MapView
                ref={mapRef}
                initialRegion={ammanGeo}
                // onMapReady={() => fitToMarker()}
                style={{width: '100%', height: '100%'}}>
                {myLocation && (
                    <Marker
                        key="MyLocation"
                        identifier="MyLocation"
                        title={I18n.t('me')}
                        coordinate={myLocation}>
                        <Image
                            style={{width: 25, height: 25}}
                            resizeMode="contain"
                            source={require('../../assest/img/driver-arrow.png')}
                        />
                    </Marker>
                )}
                {markers.length > 0 &&
                    markers.map(
                        (item) =>
                            status == 'success' && (
                                <Marker
                                    key={item.id}
                                    identifier={item.id}
                                    coordinate={item.from}>
                                    <Callout
                                        onPress={() =>
                                            Actions.replace('DriverViewOrder', {
                                                data: item,
                                            })
                                        }>
                                        <Text style={{color: colors.blue}}>
                                            {I18n.t('view_order')}
                                        </Text>
                                    </Callout>
                                </Marker>
                            ),
                    )}
            </MapView>
        </View>
    );
}

export default DriverPortal;
