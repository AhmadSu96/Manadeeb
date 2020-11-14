import React, {Component} from 'react';
import DriverPortal from './DriverPortal';
import DriverLayout from '../../components/DriverLayout';
import {connect} from 'react-redux';
import OrderRoute from './OrderRoute';

import FirebaseSetup from '../../Firebase/index';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

export class DriverPortalIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'select_order',
            data: null,
            destination: null,
        };
    }

    componentDidMount() {
        this.checkForActiveOrdersForDriver();
        if (this.props.driverOrderId) {
            this.getData();
        }
    }

    async checkForActiveOrdersForDriver() {
        // @todo select orders where type = processing and driver = current user id
        const activeOrder = await firestore()
            .collection('orders')
            .where('orderStatus', '==', 'driving')
            .where('driver_id', '==', this.props.user_id)
            .get()
            .then((snapshot) => {
                if (!snapshot.empty) {
                    const orderData = snapshot.docs[0].data();
                    const status = orderData.orderStatus;
                    switch (status) {
                        case 'driving':
                            this.setState({destination: orderData.from});
                            break;
                        case 'from_passed':
                            this.setState({destination: orderData.to});
                            break;
                    }
                    this.setState({status: 'active_order'});
                }
            });

        return true;
    }

    async getData() {
        let orderData;
        const orderRef = database().ref(`/orders/${this.props.driverOrderId}`);
        orderRef.once('value', (snapshoot) => {
            const orderData = snapshoot.val();
            const status = orderData.orderStatus;
            switch (status) {
                case 'driving':
                    this.setState({destination: orderData.from});
                    break;
                case 'from_passed':
                    this.setState({destination: orderData.to});
                    break;
            }
            this.setState({status: 'active_order'});
        });
    }

    renderTemplate() {
        const status = this.state.status;
        switch (status) {
            case 'select_order':
                return <DriverPortal />;
            case 'active_order':
                const props = {
                    destination: this.state.destination,
                };
                return <OrderRoute props={props} />;
        }
    }

    render() {
        return <DriverLayout>{this.renderTemplate()}</DriverLayout>;
    }
}

const mapsStateToProps = (state) => {
    return {
        driverOrderId: state.app.driverOrderId,
        user_id: state.user.user.user_id,
    };
};

export default connect(mapsStateToProps, null)(DriverPortalIndex);
