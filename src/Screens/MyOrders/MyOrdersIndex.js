import React, {Component} from 'react';
import {Text} from 'react-native';

import {items} from '../../test_data/MyOrdersData';
import ApplicationLayout from '../../components/ApplicationLayout';
import MyOredrs from './MyOredrs';

export class MyOrdersIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'loading',
            data: [],
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        this.setState({
            status: 'success',
            data: items,
        });
    }

    renderTemplate() {
        const status = this.state.status;
        switch (status) {
            case 'loading':
                return <Text>Loading...</Text>;
            case 'success':
                const props = {
                    data: this.state.data,
                };
                return <MyOredrs props={props} />;
        }
    }

    render() {
        return <ApplicationLayout>{this.renderTemplate()}</ApplicationLayout>;
    }
}

export default MyOrdersIndex;
