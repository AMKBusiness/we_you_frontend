import React from 'react';
import * as PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {Delete} from "@material-ui/icons";
import {TextField, Button, Grid, Typography} from "@material-ui/core";

const _emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

class Create extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: null,
            employees: [],
            employers: [],
        }
    }

    setName(value) {
        this.setState({name: value})
    }

    addMember(type) {
        this.setState({
            [type]: [...this.state[type], null]
        })
    }

    delMember(type, index) {
        this.setState({[type]: [
            ...this.state[type].slice(0, index),
            ...this.state[type].slice(++index)
        ]})
    }

    setMember(type, index, value) {
        this.setState({[type]: [
            ...this.state[type].slice(0, index),
            value,
            ...this.state[type].slice(++index)
         ]})
    }

    render() {
        return (
            <form autoComplete="off" noValidate={true}>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <TextField
                            label="Bedrijfs naam"
                            value={this.state.name}

                            onBlur={() => this.setName(this.state.name || "")}
                            onChange={e => this.setName(e.target.value)}

                            error={this.state.name === ""}
                            helperText={this.state.name === "" ? "Bedrijfsnaam mag niet leeg zijn" : ""}
                        />
                    </Grid>

                    {
                        [["Werkgevers", "employees"], ["Werknemers", "employers"]].map(([label, type]) => (
                            <Grid item xs={12} sm={10} md={8} lg={6}>
                                <Grid container spacing={1}>

                                    <Grid item xs={12}>
                                        <Typography>{label}</Typography>
                                    </Grid>

                                    {
                                        this.state[type].map((value, index) => (
                                            <React.Fragment key={index}>

                                                <Grid item xs={10}>
                                                    <TextField
                                                        style={{width: "100%"}}
                                                        value={value}

                                                        onBlur={() => this.setMember(type, index, value || "")}
                                                        onChange={e => this.setMember(type, index, e.target.value)}

                                                        error={value !== null && !_emailRegex.test(value)}
                                                        helperText={value !== null && !_emailRegex.test(value) ?
                                                            "Ongeldig email address" : ""
                                                        }
                                                    />
                                                </Grid>

                                                <Grid xs={2}>
                                                    <Button onClick={() => this.delMember(type, index)}>
                                                        <Delete/>
                                                    </Button>
                                                </Grid>

                                            </React.Fragment>
                                        ))
                                    }

                                    <Grid item xs={12}>
                                        <Button style={{width: "100%"}} onClick={() => this.addMember(type)}>
                                            +
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }

                    <Grid item xs={12}>
                        <Button onClick={() => console.log(this.state)} variant="contained" color="primary">
                            Registreer bedrijf
                        </Button>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Create);