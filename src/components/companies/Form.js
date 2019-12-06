import React from 'react';
import * as PropTypes from 'prop-types';

import arrayMutators from 'final-form-arrays'

import {TextField} from "final-form-material-ui";
import {Field, Form} from "react-final-form";

import {CardContent, CardHeader, Button, Card, Grid} from "@material-ui/core";

import ThemeForm from "./ThemeForm";
import StaffForm from "./StaffForm";
import ImageInput from "./ImageInput";


class CompanyForm extends React.PureComponent {
    render() {
        return (
            <Form
                mutators={arrayMutators}
                onSubmit={this.props.onSubmit}
                initialValues={this.props.initialValues}

                render={({handleSubmit, form: {mutators}}) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title="Algemeen"/>

                                    <CardContent>
                                        <Field
                                            name="name"
                                            label="name"
                                            validate={v => v ? undefined : "Dit veld is vereist"}
                                            fullWidth={true}
                                            component={TextField}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title="Thema"/>

                                    <CardContent>
                                        <Field
                                            name="theme"
                                            component={ThemeForm}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    name="logo"
                                    type="file"
                                    fullWidth={true}
                                    component={ImageInput}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <StaffForm mutators={mutators} label="Werknemers" name="employees"/>
                            </Grid>

                            <Grid item xs={12}>
                                <StaffForm mutators={mutators} label="Werkgevers" name="employers"/>
                            </Grid>

                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" color="primary" type="submit">
                                    Registreer bedrijf
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}/>
        );
    }
}

CompanyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
};

export default CompanyForm;
