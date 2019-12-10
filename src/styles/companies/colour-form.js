export default theme => ({
    PickerRoot: {
        width: 225,
        marginTop: theme.spacing(1),
        background: '#fff',
        borderRadius: 2,
    },

    SaturationWrapper: {
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        paddingBottom: '55%',
    },

    Saturation: {
        radius: '2px 2px 0 0',
    },

    ActiveSwatch: {
        zIndex: '2',
        absolute: '0px 0px 0px 0px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        borderRadius: 8,
    },

    CheckboardWrapper: {
        width: 16,
        height: 16,
        overflow: 'hidden',
        position: 'relative',
        marginTop: 6,
        borderRadius: 8,
    },

    Toggles: {
        flex: 1,
    },

    HUEWrapper: {
        height: 10,
        position: 'relative',
        marginBottom: 8,
    },

    HUE: {
        radius: 2,
    },

    Sample: {
        width: 40,
        height: 40,
        margin: theme.spacing(1),
        cursor: "pointer",
        borderRadius: 13,
    },

    DialogSample: {
        width: '100%',
        height: '100%',
        borderRadius: 13,
    },

    DialogCloseButton: {
        top: theme.spacing(1),
        right: theme.spacing(1),
        position: 'absolute',
    },

    DialogTitle: {
        padding: theme.spacing(2),
    }
});
