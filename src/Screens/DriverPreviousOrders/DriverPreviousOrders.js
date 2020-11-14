import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import {Actions} from 'react-native-router-flux';

function DriverPreviousOrders({props}) {
    const renderStatusIcon = (status) => {
        var img = '';
        switch (status) {
            case 'manadeep':
                img = require('../../assest/icons_png/rate-star-button1.png');
                break;
            case 'returned':
                img = require('../../assest/icons_png/rate-star-button.png');
                break;
            case 'delivered':
                img = require('../../assest/icons_png/star-empty.png');
                break;
        }
        return (
            <View style={Presets.orderStatusContainer}>
                <Image source={img} style={{height: 20, width: 20}} />
                <Text style={[Presets.colorOrange, {fontSize: 10}]}>
                    {I18n.t(status)}
                </Text>
            </View>
        );
    };

    const renderItem = (item, key) => (
        <TouchableOpacity
            onPress={() => Actions.push('DriverRate', {id: item.id})}
            style={[Presets.orangeContainer, {marginLeft: 0, marginRight: 0}]}
            key={key}>
            <View style={[Presets.flexRow, Presets.justifyBetween]}>
                <View style={{width: '80%'}}>
                    <View
                        style={[
                            Presets.flexRow,
                            Presets.flexStart,
                            Presets.flexWrap,
                        ]}>
                        <Text style={Presets.orangeItemText}>
                            {item.time + ' '}
                        </Text>
                    </View>
                    <View
                        style={[
                            Presets.flexRow,
                            Presets.flexStart,
                            Presets.flexWrap,
                        ]}>
                        <Text style={Presets.orangeItemText}>
                            {item.username + ' '}
                        </Text>
                        <Text style={Presets.orangeItemText}>
                            {item.object + ' '}
                        </Text>
                    </View>
                    <View
                        style={[
                            Presets.flexRow,
                            Presets.flexStart,
                            Presets.flexWrap,
                        ]}>
                        <Text style={Presets.orangeItemText}>
                            {item.location + ' '}
                        </Text>
                    </View>
                </View>

                {renderStatusIcon(item.status)}
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView contentContainerStyle={{marginTop: 10}}>
            {props.data.map((item, idx) => renderItem(item, idx))}
        </ScrollView>
    );
}

export default DriverPreviousOrders;
