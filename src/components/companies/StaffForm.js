import React from "react";
import * as PropTypes from "prop-types";

import {Field} from "react-final-form";
import {TextField} from "final-form-material-ui";
import {FieldArray} from "react-final-form-arrays";

import {Add, Delete} from "@material-ui/icons";
import {CardContent, IconButton, CardHeader, Grid, Card} from "@material-ui/core";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

class StaffForm extends React.PureComponent {

    validate(value) {
        return value && emailRegex.test(value) ?
            undefined : "ongeldig email address";
    }

    render() {
        const {push, pop} = this.props.mutators;

        return (
            <Card>
                <CardHeader title={this.props.label}/>

                <CardContent>
                    <Grid container>
                        <FieldArray name={this.props.name}>
                            {({fields}) => fields.map((name, index) => (
                                <Grid container item key={index} xs={12}>
                                    <Grid item xs={10}>
                                        <Field
                                            name={name}
                                            validate={this.validate}
                                            fullWidth={true}
                                            component={TextField}
                                        />
                                    </Grid>

                                    <Grid container justify="center" item xs={2} sm={1}>
                                        <IconButton tabIndex={-1} onClick={() => pop(this.props.name)}>
                                            <Delete/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            ))}
                        </FieldArray>

                        <Grid container justify="center" item xs={12}>
                            <IconButton onClick={() => push(this.props.name)}>
                                <Add/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}


StaffForm.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mutators: PropTypes.object.isRequired,
};

export default StaffForm;