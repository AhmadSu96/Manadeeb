import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Settings from '../Screens/Settings';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import DriverLogin from '../Screens/Driver/DriverLogin';
import DriverPortal from '../Screens/Driver/DriverPortal';
export default function index() {
    return (
        <Router>
            <Stack key="root">
                {/* <Scene key="Home" component={Home} hideNavBar /> */}
                {/* <Scene key="DriverLogin" component={DriverLogin} hideNavBar /> */}
                {/* <Scene key="Login" component={Login} hideNavBar />                 */}
                {/* <Scene key="Register" component={Register} hideNavBar />                 */}
                {/* <Scene key="DriverPortal" component={DriverPortal} hideNavBar /> */}
                <Scene key="Settings" component={Settings} hideNavBar />
            </Stack>
        </Router>
    );
}