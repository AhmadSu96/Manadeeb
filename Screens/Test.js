import React, { Component } from "react";
import { Dimensions, Slider, SafeAreaView, Picker, Text, StyleSheet, View, TextInput, Image, Button, ScrollView, ImageBackground } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, AnimatedRegion, Animated, UrlTile } from 'react-native-maps';
import { TouchableOpacity } from "react-native-gesture-handler";
const image = { uri: "https://reactjs.org/logo-og.png" };

class Map extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            coordinates: {
                latitude: 25.196647,
                latitudeDelta: 1.0922,
                longitudeDelta: 1.0421,
                longitude: 51.2322,
            },

            categorys: this.props.navigation.state.params.data.categorys,
            Type: this.props.navigation.state.params.data.Type,
            Order: this.props.navigation.state.params.data.Order,
            Name:this.props.navigation.state.params.data.Name,
            phone:this.props.navigation.state.params.data.phone,
        }

    }

    chooseCategory(navigation) {

        console.log(this.state);
        navigation.navigate('showOrder', { data: this.state });
    }

    render() {

      /*  console.log(this.props.navigation.state.params.data)
        console.warn(this.props.navigation.state.params.data);*/

        const width = 20;
        return (

            <ScrollView style={{ height: "100%", backgroundColor: "#ae1fcfa" }} >

                <View style={{ height: "100%", backgroundColor: "#ae1fcfa" }}>


                    <MapView 
                        provider={PROVIDER_GOOGLE}
                        style={styles.mapStyle}
                        region={this.state.coordinates}

                        onRegionChangeComplete={result => this.setState({ coordinates: result })}

                        onDragEnd={(e) => this.setState({ coordinates: e })} 
                    >
                        <Marker.Animated
                            coordinate={this.state.coordinates}
                            onDragEnd={(e) => this.setState({ coordinates: e.nativeEvent.coordinate })}
                        />

                    </MapView>
                    <View style={[styles.Button1, { borderBottomLeftRadius: 0, borderTopRightRadius: 0, }]}>

                        <TouchableOpacity onPress={() => this.chooseCategory(this.props.navigation)} >

                            <Text style={styles.TextButton}> Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>






            </ScrollView>
        );



    }
}
const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;