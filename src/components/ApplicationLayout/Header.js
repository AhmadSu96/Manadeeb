import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {Presets} from '../../styles';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

function Header() {
    const [currentScene, setcurrentScene] = useState(Actions.currentScene);

    useEffect(() => {
        setcurrentScene(Actions.currentScene);
    }, [Actions.currentScene]);

    const handleRoute = (name) => {
        if (name != Actions.currentScene) {
            Actions.replace(name);
        }
    };

    return (
        <View style={{height: 250}}>
            <View style={styles.headerContainer}>
                <View style={[Presets.justifyBetween, {width: '75%'}]}>
                    <View
                        style={[
                            Presets.flexRow,
                            Presets.justifyBetween,
                            Presets.alignCenter,
                        ]}>
                        <Text style={Presets.grayHeader}>
                            {I18n.t('hi') + ' ' + 'Anas'}
                        </Text>
                        <Image
                            source={require('../../assest/img/logo.png')}
                            style={{width: 70, height: 70}}
                        />
                    </View>
                    <Text
                        style={[
                            Presets.grayHeader2,
                            {fontSize: 22, fontWeight: 'bold'},
                        ]}>
                        {I18n.t('lets_save_your_time')}
                    </Text>
                </View>
                <View style={{width: '20%'}}>
                    <Icon name="user" size={60} />
                </View>
            </View>
            <View style={styles.headersButton}>
                <TouchableOpacity
                    style={styles.headerItem}
                    onPress={() => handleRoute('MyOrders')}>
                    <Image
                        source={require('../../assest/icons_png/my-order.png')}
                        style={styles.headerItemIcon}
                    />
                    <Text
                        style={[
                            styles.headerItemText,
                            currentScene == 'MyOrders' && {
                                color: colors.white,
                            },
                        ]}>
                        {I18n.t('my_orders')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.headerItem}
                    onPress={() => handleRoute('NewOrder')}>
                    <Image
                        source={require('../../assest/icons_png/add.png')}
                        style={styles.headerItemIcon}
                    />
                    <Text
                        style={[
                            styles.headerItemText,
                            currentScene == 'NewOrder' && {
                                color: colors.white,
                            },
                        ]}>
                        {I18n.t('new_order')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.headerItem}
                    onPress={() => handleRoute('Notifications')}>
                    <Image
                        source={require('../../assest/icons_png/notification-bell.png')}
                        style={styles.headerItemIcon}
                    />
                    <Text
                        style={[
                            styles.headerItemText,
                            currentScene == 'Notifications' && {
                                color: colors.white,
                            },
                        ]}>
                        {I18n.t('notification')}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.lightOrange,
        padding: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 90,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        zIndex: 3,
    },
    headersButton: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerItem: {
        backgroundColor: colors.orange,
        width: '25%',
        marginTop: -80,
        zIndex: 4,
        borderRadius: 25,
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    headerItemIcon: {
        height: 50,
        width: 50,
        backgroundColor: colors.white,
        borderRadius: 5,
    },
    headerItemText: {
        color: colors.grayLink,
        paddingTop: 20,
        fontSize: 13,
    },
});
