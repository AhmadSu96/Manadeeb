import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Settings from '../Screens/Settings';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import DriverLogin from '../Screens/Driver/DriverLogin';
import DriverPortal from '../Screens/Driver/DriverPortal';
// import Test from '../Screens/Test';
import search_location from '../Screens/Map_function/search_location';

export default function index() {
    return (
        <Router>
            <Stack key="root">
                {/* <Scene key="TEST" component={Test} hideNavBar /> */}
                <Scene key="Login" component={Login} hideNavBar /> 
                <Scene key="DriverLogin" component={DriverLogin} hideNavBar />
                <Scene key="Register" component={Register} hideNavBar />               
                <Scene key="DriverPortal" component={DriverPortal} hideNavBar />
                <Scene key="search_location" component={search_location} hideNavBar />   
               
                 {/* <Scene key="Settings" component={Settings} hideNavBar />  */}
            </Stack>
        </Router>
    );
}