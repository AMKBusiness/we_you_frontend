/**
 * Material UI style for components/main/Header.js
 */

const lightColor = 'rgba(255, 255, 255, 0.7)';

export default theme => ({
    secondaryBar: {
        zIndex: 0,
    },
    menuButton: {
        marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
        padding: 4,
    },
    link: {
        color: lightColor,
        textDecoration: 'none',

        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },

    overrides: {
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                backgroundColor: theme.palette.common.white,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
            },
        },
        MuiTab: {
            root: {
                margin: '0 16px',
                padding: 0,
                minWidth: 0,
                textTransform: 'none',
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
    },
});
