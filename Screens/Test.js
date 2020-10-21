import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import MapView from 'react-native-maps';

// import MapboxGL from '@react-native-mapbox-gl/maps';

// MapboxGL.setAccessToken("pk.eyJ1Ijoia2Frcm90IiwiYSI6ImNrZ2dwMjZ5YjF3cXEyenF1NTF0dGp4b3UifQ.gHp3OzDUq_DUb2roh6US6w");

const columbusCircleCoordinates = [
    25.354826, 51.183884
];

export default class Test extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                    initialRegion={{
                        latitude: 25.354826,
                        longitude: 51.183884,
                        latitudeDelta: 0.0252,
                        longitudeDelta: 0.0251,
                    }}
                    region={{
                        latitude: 25.354826,
                        longitude: 51.183884,
                        latitudeDelta: 0.0252,
                        longitudeDelta: 0.0251,
                    }}
                />
                <Text>Hi</Text>
            </View>
        )
    }
}
