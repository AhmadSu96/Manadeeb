import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';

import {Presets} from '../../styles';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import MapView, {Marker} from 'react-native-maps';
import {Actions} from 'react-native-router-flux';

function Profile({props}) {
    const mapRef = useRef();

    const [data, setData] = useState({
        location: null,
        phone_number: null,
        name: null,
        email: null,
        image: null,
    });

    useEffect(() => {
        if (props.data != null) {
            setData(props.data);
        }
    }, []);

    const setPersonLocation = (location) => {
        setData({...data, location});
        mapRef.current.fitToSuppliedMarkers(['personLocation']);
    };

    const fitToMarker = () => {
        mapRef.current.fitToSuppliedMarkers(['personLocation']);
    };

    return (
        <View style={[Presets.container, Presets.alignCenter]}>
            <TouchableOpacity style={{position: 'relative'}}>
                <Image
                    source={{uri: data.image}}
                    style={{height: 100, width: 100, borderRadius: 5}}
                />
                <Icon
                    name="camera"
                    color={colors.white}
                    size={20}
                    style={{position: 'absolute', bottom: 5, left: 5}}
                />
            </TouchableOpacity>
            <TextInput
                style={[Presets.borderedTextInput, {width: '90%'}]}
                onChangeText={(value) => setData({...data, name: value})}
                value={data.name}
            />
            <TextInput
                style={[Presets.borderedTextInput, {width: '90%'}]}
                onChangeText={(value) => setData({...data, email: value})}
                value={data.email}
            />
            <PhoneInput
                defaultCode="QA"
                containerStyle={[Presets.phoneContainerStyle, {width: '90%'}]}
                textContainerStyle={{height: 45, borderLeftWidth: 1}}
                textInputStyle={{height: 45}}
                placeholder={I18n.t('phone_number')}
                defaultValue={data.phone_number}
                onChangeText={(value) =>
                    setData({...data, phone_number: value})
                }
            />
            <TouchableOpacity
                onPress={() =>
                    Actions.push('MapSearch', {
                        props: {
                            name: 'personLocation',
                            setPersonLocation: (location) =>
                                setPersonLocation(location),
                            location: data.location,
                        },
                    })
                }
                style={[
                    Presets.borderedTextInput,
                    {height: 45, width: '90%', justifyContent: 'center'},
                ]}>
                <Text>{data.location && data.location.placeName}</Text>
            </TouchableOpacity>
            <View
                style={[
                    Presets.mapViewContainer,
                    {width: '90%', marginTop: 10, height: 100},
                ]}>
                <MapView
                    ref={mapRef}
                    onMapReady={() => fitToMarker()}
                    style={{
                        height: 100,
                    }}>
                    <Marker
                        identifier="personLocation"
                        coordinate={data.location}
                    />
                </MapView>
            </View>
        </View>
    );
}

export default Profile;
