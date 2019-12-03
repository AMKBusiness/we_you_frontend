import React from 'react';
import * as PropTypes from 'prop-types';

import {Delete} from "@material-ui/icons";
import {connect} from 'react-redux';
import {TextField, Button, Card, Grid, CardContent, CardHeader} from "@material-ui/core";

import {ColourDialogForm, LogoForm, Submit} from "./forms";

import {set_colour, set_name} from "../../actions/companies";
import {EmployeesForm, EmployersForm} from "./forms/Staff";


class Create extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
        }
    }

    render() {
        return (
            <form autoComplete="off" noValidate={true}>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="Algemeen" />

                            <CardContent>
                                <TextField
                                    label="Bedrijfs naam"
                                    value={this.state.name  || ""}

                                    onBlur={() => this.props.set_name(this.state.name || "")}
                                    onChange={({target}) => this.setState({name: target.value})}

                                    error={this.state.name === ""}
                                    helperText={this.state.name === "" ? "Bedrijfsnaam mag niet leeg zijn" : ""}
                                />
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
                        <LogoForm title="Logo" onChange={logo => this.setState({logo})} />
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

Create.propTypes = {
};

Create.defaultProps = {

};

const mapStateToProps = state => ({
    theme: PropTypes.object.isRequired,
});

const mapDispatchToProps = {
    set_name,
    set_colour,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);