import React, {Component} from 'react';
import {Text} from 'react-native';
import RateForm from './RateForm';
import {orderData} from '../../test_data/orderData';
import ApplicationLayout from '../../components/ApplicationLayout';

export class RateFormIndex extends Component {
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

    handleSubmit(data) {
        console.log(data);
    }

    /**
     * Get Order Dtails
     */
    getData() {
        const orderId = this.props.id;
        this.setState({
            data: orderData,
            status: 'success',
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
                    handleSubmit: (data) => this.handleSubmit(data),
                };
                return <RateForm props={props} />;
        }
    }

    render() {
        return <ApplicationLayout>{this.renderTemplate()}</ApplicationLayout>;
    }
}

export default RateFormIndex;
