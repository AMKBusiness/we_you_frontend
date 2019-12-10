import React from 'react';
import * as PropTypes from 'prop-types';

import {
    LinearProgress,
    CardContent,
    CardHeader,
    Typography,
    TextField,
    Tooltip,
    Button,
    Avatar,
    Grid,
    Card,

    withStyles,
} from "@material-ui/core";

import {CloudUpload, Clear} from "@material-ui/icons";

import styles from "../../styles/companies/logo-form";


class ImageInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            path: null,
            mime: null,
            data: null,

            process: 0,
            message: "",
        };
    }

    change(data, path, mime) {
        if (data.indexOf(',') !== -1)
            data = data.slice(data.indexOf(',') + 1);

        this.setState({data, path, mime});
        this.props.input.onChange({data, path, mime})
    }

    handle(file) {
        if (!file.type.startsWith("image/")) {
            this.setState({message: "Bestand moet een afbeelding zijn"});
            return;
        }

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = ({target: {result}}) => (
            this.change(result, file.name, file.type)
        );

        reader.onprogress = ({loaded, total}) => this.setState({
            process: Math.round((loaded / total) * 100)
        });

        reader.onloadend = () => this.setState({
            process: 100,
        });
    }

    onDrop(event) {
        event.preventDefault();

        if (
            (event.dataTransfer.items && event.dataTransfer.items.length !== 1)
            ||
            (event.dataTransfer.files && event.dataTransfer.files.length !== 1)
        ) {
            this.setState({message: "U kan maar 1 bestand tegelijk uploaden"});
            return;
        }

        if (event.dataTransfer.files)
            this.handle(event.dataTransfer.files[0]);

        else
            this.handle(event.dataTransfer.items[0].getAsFile());
    }

    onClear() {
        this.setState({
            data: null,
            path: null,
            type: null,

            process: 0,
            message: "",
        });

        this.props.input.onChange({data: null, path: null, type: null})
    }

    static getDerivedStateFromProps(props, state) {
        if (props.input.value === null || props.input.value === undefined || props.input.value === "")
            return state;

        return {...state, ...props.input.value, process: 100};
    }

    render() {
        const {classes} = this.props;

        return (
            <Tooltip
                title="Sleep een bestand of druk op het icoon om een afbeelding te uploaden"
                enterDelay={1000}
                leaveDelay={500}
                disableTouchListener={true}
            >

                <Card onDrop={this.onDrop.bind(this)} onDragOver={e => e.preventDefault()}>
                    {
                        this.props.title !== null ?
                            <CardHeader title={this.props.title} />
                            :
                            <React.Fragment/>
                    }
                    <CardContent className={classes.CardContainer}>

                        <input
                            id="form-input-logo"
                            type="file"
                            accept="image/*"
                            onChange={({target}) => this.handle(target.files[0])}
                            className={classes.UploadReal}
                        />

                        <Grid container spacing={0} alignItems="center" justify="center">
                            <Grid container item xs={2} md={1} justify="center">
                                <label className={classes.UploadWrapper} htmlFor="form-input-logo">
                                    {
                                        this.state.process === 100 ?
                                            <Avatar className={classes.UploadIcon} src={`data:${this.state.mime};base64,${this.state.data}`}/>
                                            :
                                            <Avatar className={classes.UploadIcon}>
                                                <CloudUpload/>
                                            </Avatar>

                                    }
                                </label>
                            </Grid>

                            <Grid container direction="column" alignItems="stretch" item xs={8} sm={7} md={10}>
                                <TextField
                                    value={this.state.path !== null ? this.state.path : ""}
                                    disabled={this.state.path === null}
                                    onChange={({target}) => this.setState({path: target.value})}
                                />

                                <LinearProgress
                                    value={this.state.process}
                                    variant="determinate"
                                />

                                <Typography className={classes.ErrorMessage}>
                                    {this.state.message}
                                </Typography>
                            </Grid>

                            <Grid container item xs={2} sm={3} md={1} justify="center">
                                <Button variant="contained" onClick={this.onClear.bind(this)} disabled={!this.state.data}>
                                    <Clear/>
                                </Button>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Tooltip>
        );
    }
}


ImageInput.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    title: PropTypes.string,
};

ImageInput.defaultProps = {
    title: null,
};

export default withStyles(styles)(ImageInput);