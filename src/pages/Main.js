import React from 'react';
import * as PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {withStyles} from "@material-ui/styles";
import {Switch, Route} from "react-router";
import {CssBaseline, Hidden} from "@material-ui/core";
import {default as withWidth, isWidthUp} from "@material-ui/core/withWidth";

import {actions, labels, pages} from "../pages";

import styles from "../styles/main/page";
import Header from "../components/main/Header";
import Copyright from "../components/main/Copyright";
import Navigator from "../components/main/Navigator";
import ActionSelector from "../components/utils/ActionSelector";

import {CompaniesCreate, CompaniesDigest} from "../components/companies";

// import { GeneralChart } from "../components/charts";

import {initialize_user} from "../actions/user";


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

        if (!props.isInitialized)
            props.initialize_user();

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
                                {/*<GeneralChart />*/}
                            </Route>

                            <Route path="/main/companies/">
                                <ActionSelector action="create">
                                    <CompaniesCreate />
                                </ActionSelector>

                                <ActionSelector action="digest" default={true}>
                                    <CompaniesDigest />
                                </ActionSelector>
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

Main.propTypes = {
    route: PropTypes.string.isRequired,
    isInitialized: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    route: state.page.route,
    isInitialized: state.user.id !== null,
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
    initialize_user,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(withWidth()(Main))));