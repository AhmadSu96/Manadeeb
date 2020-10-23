import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import MapView ,{Marker} from 'react-native-maps';

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const width = Dimensions.get('window').width 
const height = Dimensions.get('window').height

const columbusCircleCoordinates = [
    25.354826, 51.183884
];

const GooglePlacesInput = () => {
    return (
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyDsW3S4nfyC_2IgQuu-cLxUc4xjgT91l-o',
          language: 'en',
        }}
      />
    );
  };

export default class Test extends Component {
    render() {
        return (
            <View>
                <View>
                    <GooglePlacesInput/>
                </View>
                <View style={{ marginTop:50}}>
                    <MapView
                        style={{ height:height*0.80,width:width*1  }}
                        initialRegion={{
                            latitude: 25.285446,
                            longitude: 51.531040,
                            latitudeDelta: 0.0252,
                            longitudeDelta: 0.0251,
                            }}
                    >
                        <Marker
                             coordinate={{latitude: 25.285446,
                                          longitude: 51.531040}}
                        />
                        {/* <Callout>
                            <Image source={{uri:data.image}}/>
                            <Text>{data.Address}</Text>
                        </Callout> */}
                    {/* </Marker> */}
                    </MapView>
            </View>
            </View>
        )
    }
}
