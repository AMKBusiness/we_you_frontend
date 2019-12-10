export default theme => ({
    CardContainer: {
        padding: 16,
        '&:last-child': {
            padding: 16,
        }
    },

    UploadIcon: {
        width: 50,
        height: 50,

        '& > *': {
            objectFit: "contain",
        }
    },

    UploadReal : {
        display: "none",
    },

    UploadWrapper: {
        cursor: "pointer",
        marginLeft: -16,
    },

    ErrorMessage: {
        color: theme.palette.error.main,
    }
})