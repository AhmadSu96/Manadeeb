import React, {Component} from 'react';
import {Text} from 'react-native';
import DriverLayout from '../../components/DriverLayout';
import DriverRate from './DriverRate';
import {orderData} from '../../test_data/orderData';

export class DriverRateIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            status: 'loading',
        };
    }

    componentDidMount() {
        this.getData();
    }

    /**
     * get Order By ID
     */
    getData() {
        this.setState({
            status: 'success',
            data: orderData,
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
                return <DriverRate props={props} />;
        }
    }

    render() {
        return <DriverLayout scroll>{this.renderTemplate()}</DriverLayout>;
    }
}

export default DriverRateIndex;
