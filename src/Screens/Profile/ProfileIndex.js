import React, {Component} from 'react';
import Profile from './Profile';
import ApplicationLayout from '../../components/ApplicationLayout';
import {userInfo} from '../../test_data/profileData';
import {Text} from 'react-native';

export class ProfileIndex extends Component {
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
                return <Profile props={props} />;
        }
    }

    render() {
        return <ApplicationLayout>{this.renderTemplate()}</ApplicationLayout>;
    }
}

export default ProfileIndex;
