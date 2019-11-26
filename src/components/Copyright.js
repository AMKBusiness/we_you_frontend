import React from "react";

import {Typography, Link} from "@material-ui/core";


class Copyright extends React.Component {
    render() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                Copyright &#169;&#160;
                <Link color="inherit" href="https://home4talent.nl/">
                    Home4Talent
                </Link>
                {new Date().getFullYear()}.
            </Typography>
        );
    }
}

Copyright.propTypes = {
};

export default Copyright;
