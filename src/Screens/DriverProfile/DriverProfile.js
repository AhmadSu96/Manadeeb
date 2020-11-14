import React, {useEffect, useRef, useState} from 'react';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';

import {Presets} from '../../styles';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import MapView, {Marker} from 'react-native-maps';
import {Actions} from 'react-native-router-flux';

function DriverProfile({props}) {
    const mapRef = useRef();

    const [data, setData] = useState({
        location: null,
        phone_number: null,
        name: null,
        email: null,
        image: null,
        qtr_id_no: null,
        nationality: null,
        location: null,
    });

    useEffect(() => {
        if (props.data != null) {
            setData(props.data);
        }
    }, []);

    const setDriverLocation = (location) => {
        setData({...data, location});
        mapRef.current.fitToSuppliedMarkers(['driverLocation']);
    };

    const fitToMarker = () => {
        mapRef.current.fitToSuppliedMarkers(['driverLocation']);
    };

    const handleSubmit = () => {
        console.log(data);
    };

    return (
        <ScrollView
            contentContainerStyle={[Presets.container, Presets.alignCenter]}>
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
                placeholder={I18n.t('full_name')}
                numberOfLines={1}
                multiline={true}
                value={data.name}
            />
            <TextInput
                style={[Presets.borderedTextInput, {width: '90%'}]}
                onChangeText={(value) => setData({...data, email: value})}
                placeholder={I18n.t('email')}
                numberOfLines={1}
                multiline={true}
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
            <TextInput
                style={[Presets.borderedTextInput, {width: '90%'}]}
                onChangeText={(value) => setData({...data, qtr_id_no: value})}
                placeholder={I18n.t('qtr_id_no')}
                numberOfLines={1}
                multiline={true}
                value={data.qtr_id_no}
            />
            <TextInput
                style={[Presets.borderedTextInput, {width: '90%'}]}
                onChangeText={(value) => setData({...data, nationality: value})}
                placeholder={I18n.t('nationality')}
                numberOfLines={1}
                multiline={true}
                value={data.nationality}
            />
            <TouchableOpacity
                onPress={() =>
                    Actions.push('MapSearch', {
                        props: {
                            name: 'driverLocation',
                            setDriverLocation: (location) =>
                                setDriverLocation(location),
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
                        identifier="driverLocation"
                        coordinate={data.location}
                    />
                </MapView>
            </View>
            <View style={Presets.container}>
                <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={[Presets.buttonContainer1, {width: 140}]}>
                    <Text style={Presets.colorWhite}>
                        {I18n.t('update_save')}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default DriverProfile;
