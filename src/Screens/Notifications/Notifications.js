import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';

function Notifications({props}) {
    const renderItem = (item, idx) => (
        <TouchableOpacity
            style={[Presets.orangeContainer, Presets.flexRow]}
            key={idx}>
            <View style={[Presets.justifyCenter, Presets.alignCenter]}>
                <Image
                    source={{uri: item.image}}
                    style={{width: 50, height: 50}}
                />
                <Text>{item.driverName}</Text>
                <Text>{I18n.t('driver')}</Text>
            </View>
            <View style={[Presets.px10, {width: '80%'}]}>
                <Text>{item.time}</Text>
                <View style={Presets.flexRow}>
                    <Text>
                        {item.recieverName +
                            ' - ' +
                            I18n.t('recieved') +
                            ' ' +
                            item.object}
                    </Text>
                </View>
                <Text>{item.location}</Text>
            </View>
        </TouchableOpacity>
    );

    return props.data.map((item, idx) => renderItem(item, idx));
}

export default Notifications;
