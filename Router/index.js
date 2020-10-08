import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Settings from '../Screens/Settings';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
export default function index() {
    return (
        <Router>
            <Stack key="root">
                {/* <Scene key="Home" component={Home} hideNavBar /> */}
                <Scene key="Login" component={Login} hideNavBar />
                <Scene key="Settings" component={Settings} hideNavBar />
            </Stack>
        </Router>
    );
}