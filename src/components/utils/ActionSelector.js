import React from 'react';
import * as PropTypes from 'prop-types';

import {connect} from 'react-redux';


class ActionSelector extends React.Component {
    render() {
        if (this.props.action === this.props.current || (this.props.current === "default" && this.props.default))
            return this.props.children;

        return <React.Fragment />
    }
}

ActionSelector.propTypes = {
    action: PropTypes.string.isRequired,
    default: PropTypes.bool,
    current: PropTypes.string.isRequired,
};

ActionSelector.defaultProps = {
    default: false,
};

const mapStateToProps = state => ({
    current: state.page.action,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActionSelector);