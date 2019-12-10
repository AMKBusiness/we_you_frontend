import React from 'react';
import * as PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import {ExitToApp, Menu} from "@material-ui/icons";

import {
    Typography,
    IconButton,
    Tooltip,
    Toolbar,
    Hidden,
    AppBar,
    Grid,
    Tabs,
    Tab,
} from "@material-ui/core";

import styles from "../../styles/main/header";

import {logout} from "../../actions/auth";
import {set_action} from "../../actions/page";


class Header extends React.Component {
    render() {
        const {set_action, classes, actions, action, title} = this.props;

        return (
            <React.Fragment>
                <AppBar color="primary" position="sticky" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={1} alignItems="center">

                            <Hidden smUp>
                                <Grid item>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={this.props.onClick}
                                        className={classes.menuButton}
                                    >
                                        <Menu />
                                    </IconButton>
                                </Grid>
                            </Hidden>

                            <Grid item xs>
                                <Typography color="inherit" variant="h5" component="h1">
                                    {title !== null ? title : ""}
                                </Typography>
                            </Grid>

                            <Grid item xs/>

                            <Grid item>
                                <Tooltip title="Log uit">
                                    <IconButton onClick={() => this.props.logout()} color="inherit">
                                        <ExitToApp />
                                    </IconButton>
                                </Tooltip>
                            </Grid>

                        </Grid>
                    </Toolbar>
                </AppBar>

                <AppBar
                    color="primary"
                    position="static"
                    component="div"
                    elevation={0}
                    className={classes.secondaryBar}
                >
                    {
                        actions.length > 0 ?
                            <Tabs
                                value={action === "default" ? actions[0].value : action}
                                onChange={(e, v) => set_action(v)}
                                textColor="inherit"
                            >

                                {
                                    actions.map((args, id) => (
                                        <Tab key={id} textColor="inherit" {...args} />
                                    ))
                                }

                            </Tabs>
                            :
                            <React.Fragment/>
                    }
                </AppBar>
            </React.Fragment>
        );
    }
}


Header.propTypes = {
    title: PropTypes.string,
    action: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    actions: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,

    logout: PropTypes.func.isRequired,
    set_action: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    action: state.page.action,
});

const mapDispatchToProps = {
    logout,
    set_action,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
