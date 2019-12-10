/**
 * Material UI style for pages/Main.js
 */

export default theme => ({
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