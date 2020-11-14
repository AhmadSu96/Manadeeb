import React, {useEffect, useState} from 'react';
import {Text, AsyncStorage, I18nManager} from 'react-native';

import I18n from './src/I18n/index';

import Settings from './src/Screens/Settings';
import Router from './src/Router';

import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App: () => React$Node = () => {
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        async function getLocaleFromStorage() {
            const locale = await AsyncStorage.getItem('default_lang');
            if (locale) {
                I18n.locale = locale;
                setStatus('success');
            } else {
                I18n.locale = I18n.locale.substring(0, 2);
                setStatus('missing_lang');
            }
        }
        getLocaleFromStorage();
    }, []);

    const renderTemplate = () => {
        switch (status) {
            case 'success':
                return <Router />;
            case 'missing_lang':
                return <Settings init={true} />;
            case 'loading':
                return <Text>Loading ...</Text>;
        }
    };

    return <Provider store={store}>{renderTemplate()}</Provider>;
};

export default App;
