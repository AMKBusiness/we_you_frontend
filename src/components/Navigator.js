import clsx from 'clsx';
import React from 'react';
import * as PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {
    List,
    Drawer,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,

    withStyles,

} from "@material-ui/core";

import {set_route} from "../actions/page";


class Navigator extends React.Component {

    render() {
        const {classes, set_route, active, pages, ...args} = this.props;

        return (
            <Drawer variant="permanent" {...args}>
                <List disablePadding>

                    <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
                        {this.props.title}
                    </ListItem>

                    {pages.map(({name, children}, id) => (
                        <React.Fragment key={id}>

                            <ListItem className={classes.categoryHeader}>
                                <ListItemText classes={{primary: classes.categoryHeaderPrimary}}>
                                    {name}
                                </ListItemText>
                            </ListItem>

                            {
                                children.map(({name, page, icon}, id) => (
                                    <ListItem
                                        key={id}
                                        button
                                        onClick={() => set_route(page)}
                                        className={clsx(classes.item, active === page && classes.itemActiveItem)}
                                    >

                                        <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                                        <ListItemText classes={{primary: classes.itemPrimary}}>
                                            {name}
                                        </ListItemText>

                                    </ListItem>
                                ))
                            }

                            <Divider className={classes.divider}/>
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
        );
    }
}

Navigator.propTypes = {
    pages: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,

    set_route: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    active: state.page.route,
});

const mapDispatchToProps = {
    set_route,
};


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
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navigator));
