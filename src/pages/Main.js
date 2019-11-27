import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {withStyles} from "@material-ui/styles";
import {Switch, Route} from "react-router";
import {CssBaseline, Hidden} from "@material-ui/core";
import {default as withWidth, isWidthUp} from "@material-ui/core/withWidth";

import {actions, labels, pages} from "../pages";

import Header from "../components/Header";
import Copyright from "../components/Copyright";
import Navigator from "../components/Navigator";


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showNavigator: false,
        };

        /**
         * Special event handler that will reset the showNavigator state
         * after the window has been larger than 600px (sm).
         */
        window.addEventListener("resize", () => {
            if (isWidthUp("sm", this.props.width))
                this.setState({showNavigator: false})
        });
    }

    static getDerivedStateFromProps(props, state) {
        if (!props.isAuthenticated)
            props.history.push("/login/");

        return state;
    }

    render() {
        const {classes, route} = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline/>

                <nav className={classes.drawer}>
                    <Hidden smUp implementation="js">
                        <Navigator
                            open={this.state.showNavigator}
                            onClose={() => this.setState({showNavigator: false})}

                            pages={pages}
                            variant="temporary"
                            PaperProps={{style: {width: 256}}}
                        />
                    </Hidden>

                    <Hidden xsDown implementation="css">
                        <Navigator title="Home4Talent" pages={pages} PaperProps={{style: {width: 256}}}/>
                    </Hidden>
                </nav>

                <div className={classes.structure}>

                    <Header
                        title={labels[route === "default" ? "dashboard" : route]}
                        actions={actions[route === "default" ? "dashboard" : route]}
                        onClick={() => this.setState({showNavigator: true})}
                    />

                    <main className={classes.main}>

                        <Switch>
                            <Route path="/main/dashboard/">
                                Hello world
                            </Route>

                            <Route path="/main/company/">
                                Hello world
                            </Route>
                        </Switch>
                    </main>

                    <footer className={classes.footer}>
                        <Copyright/>
                    </footer>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    route: state.page.route,
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

const styles = theme => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
    },

    main: {
        flex: 1,
        padding: theme.spacing(4, 4),
        background: '#eaeff1',
    },

    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: 256,
            flexShrink: 0,
        },
    },

    footer: {
        padding: theme.spacing(2),
        background: '#eaeff1',
    },

    structure: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(withWidth()(Main))));