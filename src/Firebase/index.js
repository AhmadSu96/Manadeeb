import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const config = {
    apiKey: 'AIzaSyAbYn9xm32G6unRoozTTOzvzMr7elyb-3M',
    authDomain: 'manadeeb-6d286.firebaseapp.com',
    databaseURL: 'https://manadeeb-6d286.firebaseio.com',
    projectId: 'manadeeb-6d286',
    storageBucket: 'manadeeb-6d286.appspot.com',
    messagingSenderId: '53372339234',
    appId: '1:53372339234:web:2d918a664cbfc347c3b67b',
    measurementId: 'G-037SBMGRQB',
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default () => {
    return {firebase, auth, database};
};
