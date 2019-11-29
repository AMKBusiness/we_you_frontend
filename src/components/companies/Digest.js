import React from 'react';

import {connect} from 'react-redux';


class Digest extends React.Component {
    render() {
        return (
            <div>
                Digest
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Digest);