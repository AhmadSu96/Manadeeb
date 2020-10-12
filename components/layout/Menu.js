import React from 'react';
import {
    Text,
    ScrollView,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
} from 'react-native';

import I18n from '../../I18n';
import { Presets, Spacing, Colors } from '../../styles';
import { Actions } from 'react-native-router-flux';

export default function Menu() {
    return (
        <ScrollView contentContainerStyle={styles.menuContainer}>
            <TouchableHighlight onPress={() => Actions.Settings()}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>
                        {I18n.t('settings')}
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.Home()}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>
                        {I18n.t('home_page')}
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.Home()}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>
                        {/* {I18n.t('home_page')} */}
                        Dashboard
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.Home()}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>
                        {/* {I18n.t('home_page')} */}
                        Notifications
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.Home()}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>
                        {/* {I18n.t('home_page')} */}
                        My Account
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.Home()}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>
                        {/* {I18n.t('home_page')} */}
                        Sensors
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.Home()}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>
                        {/* {I18n.t('home_page')} */}
                        Help
                    </Text>
                </View>
            </TouchableHighlight>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    menuItem: {
        paddingLeft: Spacing.large,
        paddingTop:50,
        justifyContent: 'center',
        backgroundColor: "#655B55",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    menuContainer:{
        height: "100%",
        paddingTop:50,
        backgroundColor: "#655B55",
    },
    menuItemText: {
        fontSize: 20,
        color: Colors.lightBlue,
        textShadowRadius: 1,
        textShadowOffset: {
            width: 0.5,
            height: 0.5,
        },
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: Spacing.large,
    },
});
