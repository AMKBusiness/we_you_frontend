import React from 'react';

import {connect} from 'react-redux';
import {TextField, Input} from "@material-ui/core";

class Logo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            path: "",
            mime: "",
            data: "",
        }
    }

    onChange({target}) {
        const reader = new FileReader();
        console.log(reader);

        reader.readAsDataURL(target.files[0]);
        reader.onload = ({target: f}) => this.setState({
            data: btoa(f.result),
            name: target.files[0].name,
            mime: target.files[0].type,
        })
    }

    render() {

        const onChange = this.onChange.bind(this);

        return (
            <React.Fragment>
                <Input  type="file" onChange={onChange} />
                <TextField
                    value={this.state.name}
                    onChange={({target: t}) => this.setState({name: t.value})}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Logo);