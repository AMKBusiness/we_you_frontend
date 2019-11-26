import React from 'react';
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {ThemeProvider} from '@material-ui/styles';
import {Redirect, Route, Switch} from "react-router-dom";

import Main from './pages/Main';
import theme from "./theme";
import SignIn from './pages/SignIn'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: {
                ...theme,

                palette: {
                    ...theme.palette,
                    primary: {
                        main: "#" + props.primary.toString(16),
                        contrastText: "#fff"
                    },
                    secondary: {
                        main: "#" + props.accent.toString(16),
                        contrastText: "#fff"
                    },
                }
            }
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            theme: {
                ...state.theme,

                palette: {
                    ...state.theme.palette,
                    primary: {
                        main: "#" + props.primary.toString(16),
                        contrastText: "#fff"
                    },
                    secondary: {
                        main: "#" + props.accent.toString(16),
                        contrastText: "#fff"
                    },
                }
            }
        }
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>

                <Switch>
                    <Redirect exact={true} from="/" to="/login/"/>

                    <Route path="/login/">
                        <SignIn/>
                    </Route>

                    <Route path="/main/">
                        <Main/>
                    </Route>
                </Switch>

            </ThemeProvider>
        );
    }
}

App.propTypes = {
    primary: PropTypes.number.isRequired,
    accent: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    accent: state.theme.color.accent,
    primary: state.theme.color.primary,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
