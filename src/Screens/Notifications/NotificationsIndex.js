import React, {Component} from 'react';
import {Text} from 'react-native';

import {items} from '../../test_data/NotificationsData';
import ApplicationLayout from '../../components/ApplicationLayout';
import Notifications from './Notifications';

export class NotificationsIndex extends Component {
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
                return <Text>Loading ...</Text>;
            case 'success':
                const props = {
                    data: this.state.data,
                };
                return <Notifications props={props} />;
        }
    }

    render() {
        return <ApplicationLayout>{this.renderTemplate()}</ApplicationLayout>;
    }
}

export default NotificationsIndex;
