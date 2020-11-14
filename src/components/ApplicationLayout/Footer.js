import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

function Footer() {
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
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => handleRoute('MyOrders')}>
                <Icon
                    name="home"
                    size={25}
                    color={
                        currentScene == 'MyOrders' ? colors.orange : '#DAD7E0'
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRoute('MyOrders')}>
                <Image
                    style={styles.footerIcon}
                    source={
                        currentScene == 'MyOrders'
                            ? require('../../assest/icons_png/2.png')
                            : require('../../assest/icons_png/press-light.png')
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRoute('NewOrder')}>
                <View style={styles.footerAddIcon}>
                    <Icon name="plus" size={25} color={colors.white} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRoute('Notifications')}>
                <Image
                    style={styles.footerIcon}
                    notification-bell3
                    source={
                        currentScene == 'Notifications'
                            ? require('../../assest/icons_png/notification-bell3.png')
                            : require('../../assest/icons_png/notification-2png.png')
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRoute('Profile')}>
                <Icon
                    name="user"
                    size={25}
                    color={
                        currentScene == 'Profile' ? colors.orange : '#DAD7E0'
                    }
                />
            </TouchableOpacity>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 15,
        alignItems: 'flex-end',
    },
    footerIcon: {
        height: 25,
        width: 25,
    },
    footerAddIcon: {
        backgroundColor: colors.orange,
        padding: 5,
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
