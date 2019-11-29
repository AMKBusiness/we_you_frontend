<<<<<<< Updated upstream
import React from 'react';

import {connect} from 'react-redux';

=======
import React from "react";
import {
    Card,
} from "@material-ui/core"
>>>>>>> Stashed changes

class Digest extends React.Component {
    render() {
        return (
<<<<<<< Updated upstream
            <div>
                Digest
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Digest);
=======
        <Card>
            <h1>Test</h1>
        </Card>
        )
    }
}

export default Digest;
>>>>>>> Stashed changes
