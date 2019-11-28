import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {withStyles} from "@material-ui/styles";
import {CssBaseline, Hidden} from "@material-ui/core";

import {Switch, Route} from "react-router";

import Copyright from "../components/Copyright";
import Navigator from "../components/Navigator";
import Header from "../components/Header";
import GeneralChart from "../components/generalChart";


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props, state) {
        if (! props.isAuthenticated)
            props.history.push("/login/");

        return state;
    }

    render() {
        const {classes} = this.props;

        return (
           <div className={classes.root}>
               <CssBaseline />

               <nav className={classes.drawer}>
                   <Hidden xsDown implementation="css">
                       <Navigator title="Home4Talent" PaperProps={{style: {width: 256}}}/>
                   </Hidden>
               </nav>

               <div className={classes.structure}>

                   <main className={classes.main}>
                       <Switch>
                           <Route path="/main/dashboard/" >
                               <GeneralChart />
                           </Route>

                       </Switch>
                   </main>

                   <footer className={classes.footer}>
                       <Copyright />
                   </footer>
               </div>

           </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
};

const styles = theme => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
    },

    main: {
        flex: 1,
        padding: theme.spacing(6, 4),
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Main)));