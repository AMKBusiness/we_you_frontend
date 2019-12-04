import React from 'react';

import {CardContent, CardHeader, Card, Grid} from "@material-ui/core";

import {LogoForm, NameForm, Submit} from "./forms";

import {EmployeesForm, EmployersForm} from "./forms/Staff";
import {PrimaryColourDialog, AccentColourDialog} from "./forms/Colour";


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
                                        <PrimaryColourDialog />
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item xs={4}>
                                        <b>Secundaire kleur</b>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <AccentColourDialog />
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

export default Create;