import React from 'react';

import {connect} from 'react-redux';

import TableView from './Table.js'

class Digest extends React.Component {
    render() {
        return (
            <>
                <TableView/>
            </>
        );
    }
}

export default (Digest);