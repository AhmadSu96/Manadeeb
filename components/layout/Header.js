import React from 'react';
import { Image,View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Spacing } from '../../styles';
import I18n from '../../I18n';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header({ toggleMenu }) {
    return (
        <View style={styles.menu}>
            {/* <TouchableOpacity
                style={styles.barsContainer}
                onPress={() => toggleMenu()}>
                <Text style={styles.bar} />
                <Text style={styles.bar} />
                <Text style={styles.bar} />
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.back} onPress={() => Actions.pop()}>
                {Actions.currentScene != 'Home' && (
                    <View style={{flexDirection: "row",paddingBottom:15}}>
                        <Icon style={{ paddingRight: 10 }} name={'long-arrow-left'} size={20} color="#000" />
                        <Text style={styles.back}>{I18n.t('Hi_Manadeeb')}</Text>
                    </View>
                    
                )}
            </TouchableOpacity>
            <Image
                    style={styles.Logo}
                    source={require('../../assest/img/logo.png')}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        marginTop:0,
        height: 120,
        backgroundColor: "#FBC2A4",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: Spacing.large,
        paddingLeft: Spacing.large,
        // paddingBottom:"13%",

    },
    brand: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.blue,
        // paddingTop:Spacing.large,
    },
    bar: {
        height: 3,
        width: 30,
        backgroundColor: Colors.blue,
        
    },
    barsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 20,
        // marginTop:Spacing.large,
    },
    back: {
        color: "#5D4F47",
        fontSize: 15,
    },
    Logo:{
        width:170,
        height:100,
    }
});
