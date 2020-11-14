import React, {Component} from 'react';
import DriverLayout from '../../components/DriverLayout';
import {userInfo} from '../../test_data/driverProfileData';
import {Text} from 'react-native';
import DriverProfile from './DriverProfile';

export class DriverProfileIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'loading',
            data: {},
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        this.setState({
            status: 'success',
            data: userInfo,
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
                return <DriverProfile props={props} />;
        }
    }

    render() {
        return <DriverLayout scroll>{this.renderTemplate()}</DriverLayout>;
    }
}

export default DriverProfileIndex;
