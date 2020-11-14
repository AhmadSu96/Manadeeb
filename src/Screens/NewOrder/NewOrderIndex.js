import React, {Component} from 'react';
import {connect} from 'react-redux';
import ApplicationLayout from '../../components/ApplicationLayout';
import NewOrder from './NewOrder';
import SelectPayer from './SelectPayer';
import Processing from './Processing';

export class NewOrderIndex extends Component {
    renderTemplate() {
        const orderStatus = this.props.orderStatus;
        switch (orderStatus) {
            case 'initial':
                return <NewOrder />;
            case 'first_step_passed':
                return <SelectPayer />;
            case 'processing':
                return <Processing />;
        }
    }

    render() {
        return <ApplicationLayout>{this.renderTemplate()}</ApplicationLayout>;
    }
}

const mapStateToProps = (state) => {
    return {
        orderStatus: state.app.orderStatus,
    };
};

export default connect(mapStateToProps, null)(NewOrderIndex);
