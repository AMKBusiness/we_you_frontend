import React from 'react';

import {connect} from 'react-redux';

import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';


class TableView extends React.Component {


    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Naam antwoordset</TableCell>
                            <TableCell>Aantal antwoorden</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableCell>this is a test</TableCell>
                        <TableCell>this is a test</TableCell>
                        <TableCell>Button for edit delete and view</TableCell>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default connect(null)(TableView);