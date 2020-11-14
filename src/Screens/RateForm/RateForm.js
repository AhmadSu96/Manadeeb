import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import colors from '../../styles/colors';
import RateField from '../../components/RateField';
import {TextInput} from 'react-native-gesture-handler';

function RateForm({props}) {
    const [rate, setRate] = useState({
        service: 1,
        response: 1,
        driver: 1,
        quality: 1,
        performance: 1,
        app_style: 1,
        price: 1,
    });

    const [comment, setComment] = useState(null);

    const handleRateChange = (name, value) => {
        setRate({...rate, [name]: value});
    };

    const handleSubmit = () => {
        // if (comment != null && comment != '') {
        const data = {
            comment: comment,
            ...rate,
        };
        props.handleSubmit(data);
        // } else {
        // alert(I18n.t('comment_field_is_required'))
        // }
    };

    return (
        <View style={Presets.flex1}>
            <View style={[Presets.flexRow]}>
                <View
                    style={[
                        Presets.orangeContainer,
                        Presets.flex1,
                        Presets.flexRow,
                    ]}>
                    <Text style={[Presets.bold, {flex: 1, fontSize: 12}]}>
                        {I18n.t('from')}
                    </Text>
                    <View style={{flex: 4}}>
                        <Text
                            style={[
                                Presets.px10,
                                Presets.colorGrayLink,
                                {fontSize: 8},
                            ]}>
                            {I18n.t('sender_details')}
                        </Text>
                        <Text style={[{fontSize: 8}]}>
                            {props.data.from.name}
                        </Text>
                        <Text style={{fontSize: 8}}>
                            {props.data.from.location}
                        </Text>
                    </View>
                </View>
                <View
                    style={[
                        Presets.orangeContainer,
                        Presets.flex1,
                        Presets.flexRow,
                    ]}>
                    <Text
                        style={[
                            Presets.bold,
                            {flex: 1, fontSize: 12, color: colors.grayLink},
                        ]}>
                        {I18n.t('to')}
                    </Text>
                    <View style={{flex: 4}}>
                        <View style={[Presets.flexRow, Presets.justifyStart]}>
                            <Text
                                style={[
                                    Presets.px10,
                                    Presets.colorGrayLink,
                                    {fontSize: 8},
                                ]}>
                                {I18n.t('reciever_details')}
                            </Text>
                        </View>
                        <View style={[Presets.flexRow, Presets.justifyStart]}>
                            <Text style={[{fontSize: 8}]}>
                                {props.data.to.name}
                            </Text>
                        </View>
                        <View style={[Presets.flexRow, Presets.justifyStart]}>
                            <Text style={{fontSize: 8}}>
                                {props.data.to.location}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[Presets.flexRow, {marginTop: 15}]}>
                <View style={[Presets.orangeContainer, Presets.flex1]}>
                    <View style={[Presets.flexRow, Presets.justifyStart]}>
                        <Text style={{fontSize: 8}}>{props.data.object}</Text>
                    </View>
                    <View style={[Presets.flexRow, Presets.justifyStart]}>
                        <Text style={{fontSize: 8, color: colors.grayLink}}>
                            {props.data.package}
                        </Text>
                    </View>
                </View>
                <View style={[Presets.container, Presets.flex1]}>
                    <View style={[Presets.flexRow, Presets.justifyStart]}>
                        <Text style={{fontSize: 10}}>{props.data.date}</Text>
                        <Text style={{fontSize: 10, color: 'red'}}>
                            {props.data.time}
                        </Text>
                    </View>
                    <View style={[Presets.flexRow, Presets.justifyStart]}>
                        <Text style={{fontSize: 10, color: colors.grayLink}}>
                            {props.data.package}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <RateField
                    name="service"
                    onChange={(value) => handleRateChange('service', value)}
                    value={rate.service}
                />
                <RateField
                    name="response"
                    onChange={(value) => handleRateChange('response', value)}
                    value={rate.response}
                />
                <RateField
                    name="driver"
                    onChange={(value) => handleRateChange('driver', value)}
                    value={rate.driver}
                />
                <RateField
                    name="quality"
                    onChange={(value) => handleRateChange('quality', value)}
                    value={rate.quality}
                />
                <RateField
                    name="performance"
                    onChange={(value) => handleRateChange('performance', value)}
                    value={rate.performance}
                />
                <RateField
                    name="app_style"
                    onChange={(value) => handleRateChange('app_style', value)}
                    value={rate.app_style}
                />
                <RateField
                    name="price"
                    onChange={(value) => handleRateChange('price', value)}
                    value={rate.price}
                />
                <View style={[Presets.container, {alignItems: 'center'}]}>
                    <TextInput
                        style={[
                            Presets.borderedTextInput,
                            {borderRadius: 0, width: '100%'},
                        ]}
                        placeholder={I18n.t('comments')}
                        value={comment}
                        onChangeText={(value) => setComment(value)}
                        multiline={true}
                        numberOfLines={3}
                    />
                    <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={[Presets.buttonContainer1, {width: '50%'}]}>
                        <Text style={Presets.colorWhite}>
                            {I18n.t('submit')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default RateForm;
