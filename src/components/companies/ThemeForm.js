import React from 'react';
import * as PropTypes from 'prop-types';

import {Grid} from "@material-ui/core";

import {Field} from "react-final-form";

import ColorInput from "./Color";


class ThemeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            primary: "#E94248",
            accent: "#26223D",
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.input.value === undefined || props.input.value === null || props.input.value === "")
    //         return state;
    //
    //     return {...state, ...props.input.value};
    // }

    // callback(spectrum) {
    //     return value => {
    //         this.setState({[spectrum]: value});
    //         this.props.input.onChange({...this.state, [spectrum]: value});
    //     }
    // }

    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={4}>
                        <b>Primaire kleur</b>
                    </Grid>
                    <Grid item xs={8}>
                        <Field
                            name="theme.primary"
                            component={ColorInput}
                            initialValue="#E94248"
                        />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={4}>
                        <b>Secundaire kleur</b>
                    </Grid>
                    <Grid item xs={8}>
                        <Field
                            name="theme.accent"
                            component={ColorInput}
                            initialValue="#26223D"
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

ThemeForm.propTypes = {};

ThemeForm.defaultProps = {};

export default ThemeForm;