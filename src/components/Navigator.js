import React, {Component} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link} from "react-router-dom";

const categories = [
    {
        id: 'Overzicht',
        children: [
            {id: 'Bedrijf', path: "/main/company/", icon: <PeopleIcon/>, active: true},
        ],
    },
    {
        id: 'Persoonlijk',
        children: [
            {id: 'Instellingen', path: "/main/settings/", icon: <SettingsIcon/>},
        ],
    },
];

const styles = theme => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        fontSize: 'inherit',
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
    },

    hiddenLink: {
        textDecoration: "none",
    }
});

class Navigator extends Component {
    render() {
        const {classes, ...other} = this.props;

        return (
            <Drawer variant="permanent" {...other}>
                <List disablePadding>

                    <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
                        {this.props.title}
                    </ListItem>

                    <Link className={classes.hiddenLink} to="/main/dashboard">
                        <ListItem className={clsx(classes.item, classes.itemCategory)}>
                            <ListItemIcon className={classes.itemIcon}>
                                <HomeIcon/>
                            </ListItemIcon>

                            <ListItemText classes={{
                                primary: classes.itemPrimary,
                            }}
                            >
                                Dashboard
                            </ListItemText>

                        </ListItem>
                    </Link>

                    {categories.map(({id, children}) => (
                        <React.Fragment key={id}>
                            <ListItem className={classes.categoryHeader}>
                                <ListItemText
                                    classes={{
                                        primary: classes.categoryHeaderPrimary,
                                    }}
                                >
                                    {id}
                                </ListItemText>
                            </ListItem>
                            {children.map(({id: childId, path, icon, active}) => (
                                <Link className={classes.hiddenLink} to={path}>
                                    <ListItem
                                        key={childId}
                                        button
                                        className={clsx(classes.item, active && classes.itemActiveItem)}
                                    >
                                        <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.itemPrimary,
                                            }}
                                        >
                                            {childId}
                                        </ListItemText>
                                    </ListItem>
                                </Link>
                            ))}

                            <Divider className={classes.divider}/>
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
        );
    }
}

Navigator.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
