import React from 'react';

import {connect} from 'react-redux';

import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';


class TableView extends React.Component {


    render() {
        return (
            <>
                <Table container>
                    <TableHead>
                        <TableRow>
                            <TableCell>Naam antwoordset</TableCell>
                            <TableCell>Aantal Vragen</TableCell>

                        </TableRow>
                    </TableHead>
                </Table>
            </>
        );
    }
}

export default connect(null)(TableView);