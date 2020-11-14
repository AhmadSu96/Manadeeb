import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Sizing} from '.';
import colors from './colors';

module.exports = StyleSheet.create({
    fullScreen: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexColumn: {
        flexDirection: 'column',
    },

    // Justify
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyAround: {
        justifyContent: 'space-around',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    justifyCenter: {
        justifyContent: 'center',
    },

    flexWrap: {
        flexWrap: 'wrap',
    },

    // Align
    alignCenter: {
        alignItems: 'center',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    flex1: {
        flex: 1,
    },
    allCentered: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Containers
    container: {
        padding: 15,
    },
    headerContainer: {
        paddingTop: 20,
        paddingBottom: 40,
        backgroundColor: colors.lightOrange,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    radiusContainer: {
        backgroundColor: colors.white,
        marginTop: -25,
        padding: 15,
        borderRadius: 30,
    },
    WelcomeContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '80%',
    },
    orangeContainer: {
        backgroundColor: colors.lightOrange2,
        padding: 15,
        marginTop: 5,
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 15,
    },

    // Fonts
    bold: {
        fontWeight: 'bold',
    },
    whiteTitle: {
        fontSize: Sizing.fontLarge,
        color: colors.white,
    },
    brownTitle: {
        fontSize: Sizing.fontMedium,
        color: colors.grayLink,
    },
    grayLink: {
        fontSize: 13,
        color: colors.grayLink,
        marginTop: 10,
    },
    grayHeader: {
        fontSize: Sizing.fontLarge,
        color: colors.grayLink,
        fontWeight: 'bold',
        marginLeft: 15,
        marginRight: 15,
    },
    grayHeader2: {
        fontSize: Sizing.fontLarge,
        color: colors.grayLink,
        // fontWeight: 'bold',
        marginLeft: 15,
        marginRight: 15,
        marginTop: -15,
    },
    orangeItemText: {
        color: colors.grayLink,
        fontSize: 12,
        marginTop: 2,
    },
    totalPrice: {
        borderColor: colors.grayLink,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
    },
    orderHeaderText: {
        color: colors.grayLink,
        textAlign: 'center',
        marginTop: 5,
    },

    px10: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    px15: {
        paddingLeft: 10,
        paddingRight: 10,
    },

    // Widths
    w140: {
        width: 140,
    },

    // Borders
    borderBrown: {
        borderBottomColor: '#5D4F47',
        borderBottomWidth: 1,
    },

    // Colors
    colorWhite: {
        color: colors.white,
    },
    colorGrayLink: {
        color: colors.grayLink,
    },
    colorOrange: {
        color: colors.orange,
    },

    // Buttons
    buttonContainer1: {
        backgroundColor: colors.orange,
        height: 40,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
    },
    buttonContainer2: {
        backgroundColor: colors.orange,
        marginTop: 30,
        padding: 20,
        textAlign: 'center',
        color: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    mapViewContainer: {
        width: '50%',
        height: 80,
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: colors.grayLink,
        borderWidth: 1,
    },
    mapViewContainerFull: {
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: colors.grayLink,
        borderWidth: 1,
    },

    // Inputs
    textInput: {
        height: 45,
        backgroundColor: '#fff',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
    },
    borderedTextInput: {
        backgroundColor: colors.white,
        borderRadius: 5,
        color: colors.grayLink,
        marginTop: 10,
        borderColor: colors.black,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    phoneContainerStyle: {
        backgroundColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginTop: 10,
    },
    searchMapButton: {
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.white,
        borderRadius: 5,
        marginTop: 10,
        borderColor: colors.grayLink,
        borderWidth: 1,
    },
    pickerContainer: {
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 10,
        height: 45,
        justifyContent: 'center',
    },
    orderHeaderContainer: {
        position: 'relative',
        height: 100,
        alignItems: 'center',
    },
    orderStatusContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Shapes
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 25,
        borderColor: colors.grayLink,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 2,
    },
    radioCircleSelected: {
        height: 14,
        width: 14,
        backgroundColor: colors.grayLink,
        borderRadius: 7,
    },
    orderHeaderLine: {
        position: 'absolute',
        width: '90%',
        height: 2,
        backgroundColor: colors.green,
        bottom: 60,
        left: 15,
    },
});
