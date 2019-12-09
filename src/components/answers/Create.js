import React from 'react';

import {connect} from 'react-redux';

import AnswerForm from "./Form";


class Create extends React.Component {
    render() {

        return (
            <AnswerForm onSubmit={this.onSubmit.bind(this)}/>
        );
    }

    onSubmit(values) {
        console.log(values);
    }
}

export default connect(null)(Create);