import React from 'react';

import * as PropTypes from "prop-types";

import {Form, Field} from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import {FieldArray} from 'react-final-form-arrays';
import {TextField} from 'final-form-material-ui';
import {Add, Delete} from '@material-ui/icons';
import {Grid, Card, CardContent, CardHeader, Button, IconButton, Tooltip} from '@material-ui/core';


class AnswerForm extends React.PureComponent {
    render() {
        return (
            <Form
                onSubmit={this.props.onSubmit}
                mutators={arrayMutators}
                render={(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Naam antwoordset'/>
                                    <CardContent>
                                        <Grid container item xs={12}>
                                            <Field
                                                name='label'
                                                label='naam'
                                                component={TextField}
                                                fullWidth={true}
                                            />
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Antwoorden'/>
                                    <CardContent>
                                        <Grid container>
                                            <FieldArray name='values'>
                                                {({fields}) => (
                                                    <Grid item xs={12} spacing={1}>
                                                        {fields.map((name, index) => (
                                                                <Grid container item xs={12}>
                                                                    <Grid container item xs={10}>
                                                                        <Field
                                                                            name={`${name}.label`}
                                                                            label={`antwoord ${index + 1}`}
                                                                            component={TextField}
                                                                            fullWidth={true}
                                                                        />
                                                                        <Field
                                                                            name={`${name}.order`}
                                                                            type='hidden'
                                                                            component="input"
                                                                            initialValue={index}
                                                                        />
                                                                    </Grid>
                                                                    <Tooltip title={`verwijder antwoord ${index + 1}`}>

                                                                        <Grid item xs={2}>
                                                                            <IconButton
                                                                                onClick={() => fields.remove(index)}
                                                                                color='secondary'
                                                                            >
                                                                                <Delete/>
                                                                            </IconButton>
                                                                        </Grid>
                                                                    </Tooltip>
                                                                </Grid>


                                                            )
                                                        )}
                                                        <Button onClick={() => fields.push()} fullWidth={true}
                                                                color='primary'><Add/></Button>
                                                    </Grid>
                                                )
                                                }
                                            </FieldArray>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Button type='submit' fullWidth={true} variant='contained'
                                                color='primary'>Save</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </form>
                )}/>
        );
    }
}

AnswerForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
};

export default AnswerForm;