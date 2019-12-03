import React from 'react';

import {connect} from 'react-redux';
import * as PropTypes from "prop-types";

import {Button} from "@material-ui/core";


class Submit extends React.Component {

    onSubmit() {
        if (Array.isArray(this.props.errors.name) && this.props.errors.name.length > 0)
            return;

        if (Array.isArray(this.props.errors.employees) && this.props.errors.employees.length > 0)
            return;

        // TODO: add post.
    }

    render() {
        return (
            <Button onClick={this.onSubmit.bind(this)} variant="contained" color="primary">
                Registreer bedrijf
            </Button>
        );
    }
}

Submit.propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.object,

    theme: PropTypes.object.isRequired,
    errors: PropTypes.array.isRequired,

    employers: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    name: state.companies.create.name,
    logo: state.companies.create.logo,
    theme: state.companies.create.theme,
    errors: state.companies.create.errors,

    employers: state.companies.create.employers,
    employees: state.companies.create.employees,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Submit);