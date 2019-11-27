import React from 'react';
import * as PropTypes from 'prop-types';

import {connect} from "react-redux";
import {withRouter} from 'react-router';

import {

    withStyles,

    Box,
    Avatar,
    Button,
    Checkbox,
    Container,
    TextField,
    Typography,
    CssBaseline,
    FormControlLabel,

} from "@material-ui/core";

import {LockOutlined} from '@material-ui/icons';


import Copyright from "../components/Copyright";

import {login, rememberMe} from '../actions/auth'


class SignIn extends React.Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', rememberMe: false}
    }

    onSubmit(event) {
        event.preventDefault();

        const username = this.state.username;
        const password = this.state.password;

        this.props.rememberMe(this.state.rememberMe);
        this.props.login(username, password);

    }

    static getDerivedStateFromProps(props, state) {
        if (props.isAuthenticated)
            props.history.push("/main/dashboard/");

        return state;
    }

    render() {
        const {classes} = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            required={true}
                            fullWidth={true}
                            autoFocus={true}

                            id="email"
                            name="email"
                            label="Email Address"
                            margin="normal"
                            variant="outlined"
                            autoComplete="email"

                            onChange={event => this.setState({username: event.target.value})}
                        />
                        <TextField
                            required={true}
                            fullWidth={true}

                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            margin="normal"
                            variant="outlined"

                            onChange={event => this.setState({password: event.target.value})}

                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked={false}
                                    onChange={event => this.setState({rememberMe: event.target.checked})}
                                    value="remember"
                                    color="secondary"
                                />
                            }
                            label="Remember me"
                        />
                        <Button
                            onClick={e => this.onSubmit(e)}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
    login,
    rememberMe
};

const styles = theme => ({
    paper: {
        display: 'flex',
        marginTop: theme.spacing(8),
        alignItems: 'center',
        flexDirection: 'column',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(SignIn)));