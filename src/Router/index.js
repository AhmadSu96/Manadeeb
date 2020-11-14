import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import I18n from '../I18n';
import Settings from '../Screens/Settings';
// import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import DriverLogin from '../Screens/Driver/DriverLogin';
import StartPage from '../Screens/StartPage';
import MyOredrsIndex from '../Screens/MyOrders/MyOrdersIndex';
import Welcome from '../Screens/Welcome';
import NewOrderIndex from '../Screens/NewOrder/NewOrderIndex';
import MapSearch from '../Screens/MapSearch/MapSearch';
import NotificationsIndex from '../Screens/Notifications/NotificationsIndex';
import ProfileIndex from '../Screens/Profile/ProfileIndex';
import RateFormIndex from '../Screens/RateForm/RateFormIndex';
import DriverPortalIndex from '../Screens/DriverPortal/DriverPortalIndex';
import {useSelector} from 'react-redux';
import DriverPreviousOrdersIndex from '../Screens/DriverPreviousOrders/DriverPreviousOrdersIndex';
import DriverProfileIndex from '../Screens/DriverProfile/DriverProfileIndex';
import DriverRateIndex from '../Screens/DriverRate/DriverRateIndex';
import DriverViewOrder from '../Screens/DriverViewOrder';

export default function index() {
    const user = useSelector((state) => state.user);

    return (
        <Router>
            <Stack key="root">
                {/* User */}
                {user.loggedIn && user.user.role == 'user' && (
                    <Scene
                        key="MyOrders"
                        component={MyOredrsIndex}
                        hideNavBar
                    />
                )}
                {user.loggedIn && user.user.role == 'user' && (
                    <Scene
                        key="NewOrder"
                        component={NewOrderIndex}
                        hideNavBar
                    />
                )}
                {user.loggedIn && user.user.role == 'user' && (
                    <Scene key="Profile" component={ProfileIndex} hideNavBar />
                )}
                {user.loggedIn && user.user.role == 'user' && (
                    <Scene
                        key="RateForm"
                        component={RateFormIndex}
                        hideNavBar
                    />
                )}

                {/* Driver */}
                {user.loggedIn && user.user.role == 'driver' && (
                    <Scene
                        key="DriverPortal"
                        component={DriverPortalIndex}
                        hideNavBar
                    />
                )}
                {user.loggedIn && user.user.role == 'driver' && (
                    <Scene
                        key="DriverViewOrder"
                        component={DriverViewOrder}
                        title={I18n.t('order_details')}
                    />
                )}
                {user.loggedIn && user.user.role == 'driver' && (
                    <Scene
                        key="DriverProfile"
                        component={DriverProfileIndex}
                        hideNavBar
                    />
                )}
                {user.loggedIn && user.user.role == 'driver' && (
                    <Scene
                        key="DriverPreviousOrders"
                        component={DriverPreviousOrdersIndex}
                        hideNavBar
                    />
                )}
                {user.loggedIn && user.user.role == 'driver' && (
                    <Scene
                        key="DriverRate"
                        component={DriverRateIndex}
                        hideNavBar
                    />
                )}

                {/* All Users */}
                {user.loggedIn && (
                    <Scene key="MapSearch" component={MapSearch} hideNavBar />
                )}
                {user.loggedIn && (
                    <Scene
                        key="Notifications"
                        component={NotificationsIndex}
                        hideNavBar
                    />
                )}

                {/* Anonymous */}
                {!user.loggedIn && (
                    <Scene key="startpage" component={StartPage} hideNavBar />
                )}
                {!user.loggedIn && (
                    <Scene key="Welcome" component={Welcome} hideNavBar />
                )}
                {!user.loggedIn && (
                    <Scene key="Settings" component={Settings} hideNavBar />
                )}
                {!user.loggedIn && (
                    <Scene
                        key="DriverLogin"
                        component={DriverLogin}
                        hideNavBar
                    />
                )}
                {!user.loggedIn && (
                    <Scene key="Login" component={Login} hideNavBar />
                )}
                {!user.loggedIn && (
                    <Scene key="Register" component={Register} hideNavBar />
                )}
            </Stack>
        </Router>
    );
}
