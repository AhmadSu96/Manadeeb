import React, {useState, useEffect, useRef} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {Picker} from '@react-native-community/picker';

import PhoneInput from 'react-native-phone-number-input';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import colors from '../../styles/colors';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {useDispatch, useSelector} from 'react-redux';
import {dohaGeo, googleKey} from '../../providers/constants';
import {setCost, setOrderStatus, setReciever} from '../../actions';

function NewOrder() {
    // Reciever data
    const [data, setData] = useState({
        phone: null,
        name: null,
        package: null,
        comments: null,
    });

    // Selectors
    const from = useSelector((state) => state.app.from);
    const to = useSelector((state) => state.app.to);
    const reciever = useSelector((state) => state.app.reciever);

    // Dsipatch
    const dispatch = useDispatch();

    // Ref
    const map1Ref = useRef();
    const map2Ref = useRef();

    useEffect(() => {
        map1Ref.current.fitToSuppliedMarkers(['fromLocation']);
    }, [from]);

    useEffect(() => {
        map2Ref.current.fitToSuppliedMarkers(['toLocation']);
    }, [to]);

    useEffect(() => {
        if (reciever != null) {
            setData(reciever);
        }
    }, []);

    const fitToMarker = (name) => {
        if (name == 'map1') {
            map1Ref.current.fitToSuppliedMarkers(['fromLocation']);
        } else if ((name = 'map2')) {
            map2Ref.current.fitToSuppliedMarkers(['toLocation']);
        }
    };

    const validate = () => {
        if (!from || from == null) {
            alert(I18n.t('please_enter_receivers_location'));
            return false;
        }
        if (!to || to == null) {
            alert(I18n.t('please_enter_your_location'));
            return false;
        }
        if (data.name == null || data.name == '') {
            alert(I18n.t('please_enter_recievers_name'));
            return false;
        }
        if (data.package == null) {
            alert(I18n.t('please_select_a_package'));
            return false;
        }
        if (data.phone == null || data.phone == '') {
            alert(I18n.t('please_enter_recievers_phone'));
            return false;
        }
        return true;
    };

    const calculateCost = async () => {
        const mode = 'driving';
        const origin = from.latitude + ',' + from.longitude;
        const destination = to.latitude + ',' + to.longitude;
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${googleKey}&mode=${mode}`;
        const response = await fetch(url);
        await response.json().then((json) => {
            const distance = json.routes[0].legs[0].distance.value;
            const cost = distance < 1000 ? 30 : 100;
            dispatch(setCost(cost));
        });
    };

    const goToFinialStep = async () => {
        const valid = validate();
        if (valid) {
            await calculateCost();
            dispatch(setReciever(data));
            dispatch(setOrderStatus('first_step_passed'));
        }
    };

    return (
        <View>
            <View style={Presets.orangeContainer}>
                <Text
                    style={[Presets.brownTitle, Presets.bold, {fontSize: 16}]}>
                    {I18n.t('reciever_details')}
                </Text>
                <TextInput
                    placeholder={I18n.t('full_name')}
                    value={data.name}
                    style={Presets.borderedTextInput}
                    multiline={true}
                    numberOfLines={1}
                    onChangeText={(value) => setData({...data, name: value})}
                />
                <PhoneInput
                    defaultCode="QA"
                    containerStyle={Presets.phoneContainerStyle}
                    textContainerStyle={{height: 45, borderLeftWidth: 1}}
                    textInputStyle={{height: 45}}
                    placeholder={I18n.t('phone_number')}
                    onChangeFormattedText={(value) =>
                        setData({...data, phone: value})
                    }
                />
            </View>

            {/* Reciever Location */}
            <View
                style={[
                    Presets.orangeContainer,
                    Presets.flexRow,
                    Presets.justifyBetween,
                    {marginTop: 20},
                ]}>
                <View style={{width: '48%'}}>
                    <Text
                        style={[
                            Presets.brownTitle,
                            Presets.bold,
                            {fontSize: 16},
                        ]}>
                        {I18n.t('reciever_location')}
                    </Text>
                    <TouchableOpacity
                        style={Presets.searchMapButton}
                        onPress={() =>
                            Actions.push('MapSearch', {props: {name: 'from'}})
                        }>
                        <Icon name="search" size={12} color={colors.grayLink} />
                        <Text style={[Presets.px10, {fontSize: 10}]}>
                            {I18n.t('search')}
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={[
                            Presets.colorGrayLink,
                            {fontSize: 12, marginTop: 5},
                        ]}>
                        {from && from.placeName}
                    </Text>
                </View>
                <View style={Presets.mapViewContainer}>
                    <MapView
                        initialRegion={dohaGeo}
                        ref={map1Ref}
                        onMapReady={() => fitToMarker('map1')}
                        onPress={() =>
                            Actions.push('MapSearch', {props: {name: 'from'}})
                        }
                        style={{height: 80}}>
                        {from && (
                            <Marker
                                identifier="fromLocation"
                                coordinate={from}
                            />
                        )}
                    </MapView>
                </View>
            </View>

            {/* Package Details */}
            <View style={[Presets.orangeContainer, {marginTop: 20}]}>
                <Text
                    style={[Presets.brownTitle, Presets.bold, {fontSize: 16}]}>
                    {I18n.t('package_details')}
                </Text>
                <View style={Presets.pickerContainer}>
                    <Picker
                        selectedValue={data.package}
                        style={{backgroundColor: colors.white}}
                        onValueChange={(ItemValue) =>
                            setData({...data, package: ItemValue})
                        }>
                        <Picker.Item
                            label={
                                I18n.t('package') +
                                '   - - - - - - - - - - - - - - - - '
                            }
                            value=""
                        />
                        <Picker.Item
                            label={I18n.t('clothes')}
                            value="clothes"
                        />
                        <Picker.Item label={I18n.t('food')} value="food" />
                        <Picker.Item
                            label={I18n.t('documents')}
                            value="documents"
                        />
                        <Picker.Item label={I18n.t('gifts')} value="gifts" />
                        <Picker.Item
                            label={I18n.t('electronic_devices')}
                            value="electronic_devices"
                        />
                        <Picker.Item
                            label={I18n.t('heavy_weights')}
                            value="heavy_weights"
                        />
                    </Picker>
                </View>
                <TextInput
                    placeholder={I18n.t('comments_descrip')}
                    value={data.comments}
                    onChangeText={(value) =>
                        setData({...data, comments: value})
                    }
                    style={[Presets.borderedTextInput]}
                    multiline={true}
                    numberOfLines={3}
                />
            </View>

            {/* My Location */}
            <View
                style={[
                    Presets.orangeContainer,
                    Presets.flexRow,
                    Presets.justifyBetween,
                    {marginTop: 20},
                ]}>
                <View style={{width: '48%'}}>
                    <Text
                        style={[
                            Presets.brownTitle,
                            Presets.bold,
                            {fontSize: 16},
                        ]}>
                        {I18n.t('my_location')}
                    </Text>
                    <TouchableOpacity
                        style={Presets.searchMapButton}
                        onPress={() =>
                            Actions.push('MapSearch', {props: {name: 'to'}})
                        }>
                        <Icon name="search" size={12} color={colors.grayLink} />
                        <Text style={[Presets.px10, {fontSize: 10}]}>
                            {I18n.t('search')}
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={[
                            Presets.colorGrayLink,
                            {fontSize: 12, marginTop: 5},
                        ]}>
                        {to && to.placeName}
                    </Text>
                </View>
                <View style={Presets.mapViewContainer}>
                    <MapView
                        ref={map2Ref}
                        initialRegion={dohaGeo}
                        onMapReady={() => fitToMarker('map2')}
                        onPress={() =>
                            Actions.push('MapSearch', {props: {name: 'to'}})
                        }
                        style={{height: 80}}>
                        {to && (
                            <Marker identifier="toLocation" coordinate={to} />
                        )}
                    </MapView>
                </View>
            </View>

            {/* Submit */}
            <View style={Presets.container}>
                <TouchableOpacity
                    style={Presets.buttonContainer1}
                    onPress={() => goToFinialStep()}>
                    <Text style={Presets.colorWhite}>
                        {I18n.t('go_to_final_step')}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NewOrder;
