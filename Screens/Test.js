import React, { Component } from 'react'
import { View, Text } from 'react-native'

import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken("pk.eyJ1Ijoia2Frcm90IiwiYSI6ImNrZ2dwMjZ5YjF3cXEyenF1NTF0dGp4b3UifQ.gHp3OzDUq_DUb2roh6US6w");

const columbusCircleCoordinates = [
    25.354826, 51.183884
  ];

export default class Test extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <MapboxGL.MapView
                    ref={(c) => this._map = c}
                    style={{ flex: 1, }}
                    zoomLevel={1}
                    centerCoordinate={columbusCircleCoordinates}>
                </MapboxGL.MapView>
                <Text>Hi</Text>
            </View>
        )
    }
}
