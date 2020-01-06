import React from 'react'
import * as PropTypes from 'prop-types'

import color from 'react-color/lib/helpers/color';
import ChromePointer from 'react-color/lib/components/chrome/ChromePointer'
import ChromePointerCircle from 'react-color/lib/components/chrome/ChromePointerCircle'

import {connect} from "react-redux";

import {
    Hue,
    ColorWrap,
    Checkboard,
    Saturation,
} from 'react-color/lib/components/common'

import {Close} from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";

import {
    Button,
    Dialog,
    TextField,
    IconButton,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@material-ui/core";


import styles from "../../styles/companies/colour-form";


class Palette extends React.Component {
    render() {
        const {renderers, classes, onChange, hex, hsl, hsv} = this.props;

        return (
            <div className={classes.PickerRoot}>
                <div className={classes.SaturationWrapper}>
                    <Saturation
                        className={classes.Saturation}
                        hsl={hsl}
                        hsv={hsv}
                        pointer={ChromePointerCircle}
                        onChange={onChange}
                    />
                </div>

                <div className={classes.CheckboardWrapper}>
                    <div
                        style={{background: hex}}
                        className={classes.ActiveSwatch}
                    />
                    <Checkboard renderers={renderers}/>
                </div>


                <div className={classes.Toggles}>
                    <div className={classes.HUEWrapper}>
                        <Hue
                            className={classes.HUE}
                            hsl={hsl}
                            pointer={ChromePointer}
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

Palette = ColorWrap(Palette);
Palette.propTypes = {
    classes: PropTypes.object.isRequired,
};

/**
 * The wrapper class 'ColorPicker' of react-color uses the deprecated
 * componentWillReceiveProps. This small monkey patch will make sure
 * that the logic is up-to date and compatible with react 17.x.
 */
Palette.getDerivedStateFromProps = function (props, state) {
    return {...state, ...color.toState(props.color, state.oldHue)};
};

delete Palette.prototype["componentWillReceiveProps"];


export class ChromePaletteDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            input: null,

            stored: props.value,
            active: props.value,
        }
    }

    onStore() {
        this.setState(state => ({
            open: false,
            stored: state.active,
        }));

        this.props.onChange && this.props.onChange(this.state.active)
    }

    onClose() {
        this.setState(state => ({
            open: false,
            active: state.stored,
        }))
    }

    static getDerivedStateFromProps(props, state) {
        if (!props.input.value || props.input.value !== "")
            return {...state, stored: props.input.value, active: props.input.value};

        return state;
    }

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <div
                    style={{background: this.state.stored}}
                    className={classes.Sample}
                    onClick={() => this.setState({open: true})}
                />

                <Dialog open={this.state.open} onClose={this.onClose.bind(this)}>
                    <DialogTitle className={classes.DialogTitle}>
                        <IconButton
                            onClick={this.onClose.bind(this)}
                            className={classes.DialogCloseButton}
                        >
                            <Close/>
                        </IconButton>
                    </DialogTitle>

                    <DialogContent>
                        <Palette
                            color={this.state.active}
                            classes={classes}
                            onChange={c => this.setState({active: c.hex})}
                        />

                        <TextField
                            value={this.state.input !== null ? this.state.input : this.state.active.toUpperCase()}
                            onBlur={() => this.setState({input: null})}
                            onChange={({target: {value}}) => {
                                value = "#" + value.slice(0, 7).toUpperCase().replace(/[^0-9A-F]/g, "");

                                if (/#[0-9A-F]{6}/.test(value))
                                    this.setState({input: value, active: value});

                                else
                                    this.setState({input: value})
                            }}

                            fullWidth={true}
                        />
                    </DialogContent>

                    <DialogActions>
                        <div
                            style={{background: this.state.active}}
                            className={classes.DialogSample}
                        />

                        <Button variant="outlined" onClick={this.onStore.bind(this)}>
                            Selecteer
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

ChromePaletteDialog.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

ChromePaletteDialog.defaultProps = {
    value: "#22194D",
};

export default withStyles(styles)(ChromePaletteDialog);
