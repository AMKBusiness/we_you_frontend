import React from 'react';
import * as PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {TextField} from "@material-ui/core";

import {set_name} from "../../../actions/companies";


class Name extends React.Component {
    constructor(props) {
        super(props);

        this.state = {name: props.name}
    }

    render() {
        return (
            <TextField
                label="Bedrijfs naam"
                value={this.state.name  || ""}

                onBlur={() => this.props.set_name(this.state.name || "")}
                onChange={({target}) => this.setState({name: target.value})}

                error={this.state.name === ""}
                helperText={this.state.name === "" ? "Bedrijfsnaam mag niet leeg zijn" : ""}
            />
        );
    }
}

Name.propTypes = {
    name: PropTypes.string
};

Name.defaultProps = {
    name: null,
};

export default connect(null, {set_name})(Name);