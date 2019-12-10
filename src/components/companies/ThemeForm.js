import React from 'react';
import * as PropTypes from 'prop-types';

import {CardContent, Grid} from "@material-ui/core";

import ColorInput from "./Color";


class ThemeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            primary: "#E94248",
            accent: "#26223D",
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.input.value === undefined || props.input.value === null || props.input.value === "")
            return state;

        return {...state, ...props.input.value};
    }

    callback(spectrum) {
        return value => {
            this.setState({[spectrum]: value});
            this.props.input.onChange({...this.state, [spectrum]: value});
        }
    }

    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={4}>
                        <b>Primaire kleur</b>
                    </Grid>
                    <Grid item xs={8}>
                        <ColorInput onChange={this.callback("primary")} value={this.state.primary}/>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={4}>
                        <b>Secundaire kleur</b>
                    </Grid>
                    <Grid item xs={8}>
                        <ColorInput onChange={this.callback("accent")} value={this.state.accent}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

ThemeForm.propTypes = {
    meta: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
};

ThemeForm.defaultProps = {};

export default ThemeForm;