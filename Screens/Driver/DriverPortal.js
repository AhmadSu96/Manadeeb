import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, View, Text, Dimensions, TouchableHighlight, TextInputComponent } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import Layout from '../../components/layout/Layout';

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const columbusCircleCoordinates = [
  25.354826, 51.183884
];

export default class Test extends Component {

  state = {
    latitude: 25.285446,
    longitude: 51.531040,
  }

  componentDidMount() {

    if (this.props.data) {
      this.setState({ latitude: this.props.data.lat });
      this.setState({ longitude: this.props.data.lng });

    }

  }

  render() {
    // console.log(this.props);
    return (
      <Layout>
        <View style={styles.Continar}>
          <View style={{ marginTop: 0 }}>
            <MapView
              style={{ height: height * 0.60, width: width * 1 }}
              initialRegion={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.0252,
                longitudeDelta: 0.0251,
              }}
            >
              <Marker
                coordinate={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude
                }}
              />
            </MapView>
          </View>
          <View style={styles.serchContinar}>
            {/* <TouchableOpacity onPress={() => Actions.search_location()}>
              <Text style={styles.serch}>Search</Text>
            </TouchableOpacity> */}
          </View>
          <View style={{
            position: 'absolute',
            width: '100%'
          }}>

          <GooglePlacesAutocomplete
            placeholder='Search'
            autoFocus={true}
            styles={{
              textInputContainer: {
                backgroundColor: 'grey',
              },
              textInput: {
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data.description);
              initialize(data.description);
            }}
            query={{
              key: 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U',
              language: 'en',
            }}
          />
          </View>
        </View>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({

  Continar: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    // alignItems:"center",
    // marginTop:-25,
    // paddingTop:"10%",
    borderRadius: 30
  },
  serch: {
    color: 'gray',
    backgroundColor: "#fff",
    padding: 10,
    width: width * 0.75,
    borderRadius: 30
  },
  serchContinar: {
    backgroundColor: "orange",
    width: width * 0.85,
    marginTop: -90,
    padding: 1,
    borderRadius: 30
  }
});