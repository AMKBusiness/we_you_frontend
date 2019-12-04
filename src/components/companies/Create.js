import React from 'react';
import * as PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {CardContent, CardHeader, Card, Grid} from "@material-ui/core";

import {ColourDialogForm, LogoForm, NameForm, Submit} from "./forms";

import {set_colour} from "../../actions/companies";
import {EmployeesForm, EmployersForm} from "./forms/Staff";


class Create extends React.Component {

    render() {
        return (
            <form autoComplete="off" noValidate={true}>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="Algemeen" />

                            <CardContent>
                                <NameForm />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="Thema" />

                            <CardContent>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <b>Primaire kleur</b>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <ColourDialogForm
                                            onChange={c => this.props.set_colour("primary", c)}
                                            defaultColour={this.props.theme.primary}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item xs={4}>
                                        <b>Secundaire kleur</b>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <ColourDialogForm
                                            onChange={c => this.props.set_colour("accent", c)}
                                            defaultColour={this.props.theme.accent}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <LogoForm title="Logo" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <EmployeesForm title="Werknemers"/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <EmployersForm title="Werkgevers"/>
                    </Grid>

                    <Grid container item xs={12} direction="column" alignItems="stretch">
                        <Submit />
                    </Grid>
                </Grid>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    theme: PropTypes.object.isRequired,
});

const mapDispatchToProps = {
    set_colour,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);