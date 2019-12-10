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

import styles from "../../styles/main/navigator";

import {set_route} from "../../actions/page";


class Navigator extends React.Component {

    render() {
        const {classes, set_route, active, pages, gid, ...args} = this.props;

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
                                children.filter(c => c.groups.includes(gid)).map(({name, page, icon}, id) => (
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
    gid: PropTypes.number.isRequired,
    pages: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,

    set_route: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    gid: state.user.group,
    active: state.page.route,
});

const mapDispatchToProps = {
    set_route,
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navigator));
