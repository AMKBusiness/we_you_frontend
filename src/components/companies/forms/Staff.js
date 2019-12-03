import React from 'react';
import * as PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {Delete, Add} from "@material-ui/icons";
import {IconButton, Card, CardContent, CardHeader, Grid, TextField} from "@material-ui/core";

import {
    add_staff_member,
    del_staff_member,
    set_staff_member,
    err_staff_member,
} from "../../../actions/companies";

const _emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

class Staff extends React.Component {
    onCreate() {
        const {add_staff_member, type} = this.props;

        add_staff_member(type)
    }

    onDelete(index) {
        const {del_staff_member, type} = this.props;

        del_staff_member(type, index)
    }

    onChange(index, value) {
        const {set_staff_member, type} = this.props;

        set_staff_member(type, index, value)
    }

    validated(index, value) {
        if (_emailRegex.test(value)) {
            if (Array.isArray(this.props.errors[index]))
                this.props.err_staff_member(this.props.type, index, {});

            return true;
        }

        /**
         * Only push a error message if there wasn't one found, this
         * is because the errors should mainly be provided by the backend
         * if we push additional message it could happen that double messages
         * are displayed to the current user.
         */
        if (!Array.isArray(this.props.errors[index]) || this.props.errors[index].length === 0) {
            const message = "Voer een geldig e-mailadres in.";
            this.props.err_staff_member(this.props.type, index, [message]);
        }

        return false
    }

    render() {
        return (
                <Card>
                    <CardHeader title={this.props.title}/>

                    <CardContent>
                        <Grid container spacing={1}>
                            {
                                this.props.members.map((value, index) => (
                                    <React.Fragment key={index}>

                                        <Grid item xs={10}>
                                            <TextField
                                                style={{width: "100%"}}
                                                onBlur={({target}) => (
                                                    this.validated(index, target.value)
                                                    &&
                                                    this.onChange(index, target.value)
                                                )}
                                                defaultValue={value || ""}

                                                error={Array.isArray(this.props.errors[index])}
                                                helperText={
                                                    Array.isArray(this.props.errors[index])
                                                        ? this.props.errors[index].join("\n") : ""
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={2}>
                                            <IconButton tabIndex={-1} onClick={() => this.onDelete(index)}>
                                                <Delete/>
                                            </IconButton>
                                        </Grid>

                                    </React.Fragment>
                                ))
                            }

                            <Grid item xs={12}>
                                <IconButton onClick={() => this.onCreate()}>
                                    <Add />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
        );
    }
}

Staff.propTypes = {
    type: PropTypes.oneOf(["employees", "employers"]).isRequired,

    title: PropTypes.string,
    errors: PropTypes.array,
    members: PropTypes.array,

    add_staff_member: PropTypes.func.isRequired,
    del_staff_member: PropTypes.func.isRequired,
    set_staff_member: PropTypes.func.isRequired,
    err_staff_member: PropTypes.func.isRequired,
};

Staff.defaultProps = {
    title: "",
    errors: [],
    members: [],
};


const mapDispatchToProps = {
    add_staff_member,
    del_staff_member,
    set_staff_member,
    err_staff_member,
};

export const EmployeesForm = (props) => (
    React.createElement(connect(state => ({
            errors: state.companies.create.errors.employees,
            members: state.companies.create.employees,
        }),
        mapDispatchToProps)(Staff), {...props, type: "employees"}
    )
);

export const EmployersForm = (props) => (
    React.createElement(connect(state => ({
            errors: state.companies.create.errors.employers,
            members: state.companies.create.employers,
        }),
        mapDispatchToProps)(Staff), {...props, type: "employers"}
    )
);
