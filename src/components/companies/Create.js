import React from 'react';

import {connect} from 'react-redux';

import CompanyForm from "./Form";

import {create_company} from "../../actions/companies";

class Create extends React.Component {

    onSubmit(values) {
        this.props.create_company(values);
    }

    render() {
        return (
            <CompanyForm onSubmit={this.onSubmit.bind(this)}/>
        );
    }
}

export default connect(null, {create_company})(Create);