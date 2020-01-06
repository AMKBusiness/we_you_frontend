import React from 'react';

import * as PropTypes from "prop-types";
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/styles';
import styles from '../../styles/answers/form';

import {Form, Field, FormSpy} from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import {FieldArray} from 'react-final-form-arrays';
import {TextField} from 'final-form-material-ui';
import {Add, Delete} from '@material-ui/icons';
import {
    Grid,
    Card,
    CardContent,
    CardHeader,
    Button,
    IconButton,
    Tooltip,
    Slider

} from '@material-ui/core';

import {loadStyles} from '../../actions/answers'

class AnswerForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'slider'
        };

    }


    static getDerivedStateFromProps(props, state) {
        if (props.styles === null) {
            props.loadStyles()
        }
        return state;
    }


    render() {
        function SliderSelected() {
            return <h1>Welcome back!</h1>;
        }

        function RadioSelected() {
            return <h1>Please sign up.</h1>;
        }

        function Example(props, state) {
            // console.log(state);
            if (state.selected === 'slider') {
                return <SliderSelected/>
            } else {
                return <RadioSelected/>
            }
        }

        return (

            <Form
                onSubmit={this.props.onSubmit}
                mutators={arrayMutators}
                render={(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Naam antwoordset'/>
                                    <CardContent>
                                        <Grid container item xs={12}>
                                            <Field
                                                name='label'
                                                label='naam'
                                                component={TextField}
                                                fullWidth={true}
                                            />
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid container item xs={3}>
                                <Grid>
                                    <Card>
                                        <CardHeader title='Soort vraag'/>
                                        <CardContent>
                                            <input
                                                type='radio'
                                                id='slider'
                                                name='style'
                                                value='slider'
                                                checked={this.state.selected === 'slider'}
                                                onClick={(e) => this.setState({selected: "slider"})}
                                            /> Slider <br/>
                                            <input
                                                type='radio'
                                                id='radio'
                                                name='style'
                                                value='radio'
                                                checked={this.state.selected === 'radio'}
                                                onClick={(e) => this.setState({selected: "radio"})}
                                            /> Radio
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid item xs={9}>
                                <Card>
                                    <CardHeader title='Antwoorden'/>
                                    <CardContent>
                                        <Grid container>
                                            <FieldArray initialValue={[]} name='values'>
                                                {({fields}) => (
                                                    <Grid item xs={12}>
                                                        {fields.map((name, index) => (
                                                                <Grid container item xs={12} spacing={1} key={index}>
                                                                    <Grid container item xs={11}>
                                                                        <Field
                                                                            name={`${name}.label`}
                                                                            label={`antwoord ${index + 1}`}
                                                                            component={TextField}
                                                                            fullWidth={true}
                                                                        />
                                                                        <Field
                                                                            name={`${name}.order`}
                                                                            type='hidden'
                                                                            component="input"
                                                                            initialValue={index}
                                                                        />
                                                                    </Grid>

                                                                    <Grid item xs={1}>
                                                                        <Tooltip title={`verwijder antwoord ${index + 1}`}>
                                                                            <IconButton
                                                                                onClick={() => fields.remove(index)}
                                                                                color='primary'
                                                                            >
                                                                                <Delete/>
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    </Grid>
                                                                </Grid>


                                                            )
                                                        )}

                                                        <Button onClick={() => fields.push()} fullWidth={true}
                                                                color='primary'><Add/></Button>
                                                    </Grid>
                                                )
                                                }
                                            </FieldArray>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Voorbeeld'/>

                                    <CardContent>

                                        <Example/>
                                        {/*<FormSpy subscription={{values: true}}>*/}
                                        {/*    {*/}
                                        {/*        ({values: {values}}) => (*/}
                                        {/*            <Slider min={0} max={100} marks step={100 / (values.length - 1)}/>*/}
                                        {/*        )*/}
                                        {/*    }*/}
                                        {/*</FormSpy>*/}

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>

                                        <Button className={this.props.classes.SaveButton} type='submit' fullWidth={true}
                                                variant='contained'
                                                color='primary'>Save</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    </form>
                )}/>


        );
    }
}

AnswerForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
};

const mapStateToProps = (state) => ({
    styles: state.answers.init.styles
});

export default connect(mapStateToProps, {loadStyles})(withStyles(styles)(AnswerForm));