import React, {Component} from 'react';
import {Text} from 'react-native';
import DriverLayout from '../../components/DriverLayout';
import {driverPreviousOrders} from '../../test_data/driverPreviousOrders';
import DriverPreviousOrders from './DriverPreviousOrders';

export class DriverPreviousOrdersIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            status: 'loading',
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.setState({
            status: 'success',
            data: driverPreviousOrders,
        });
    }

    renderTemplate() {
        const status = this.state.status;
        switch (status) {
            case 'loading':
                return <Text>Loading ...</Text>;
            case 'success':
                const props = {
                    data: this.state.data,
                };
                return <DriverPreviousOrders props={props} />;
        }
    }

    render() {
        return <DriverLayout scroll>{this.renderTemplate()}</DriverLayout>;
    }
}

export default DriverPreviousOrdersIndex;
