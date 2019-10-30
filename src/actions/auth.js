import axios from "axios";
import {AUTHENTICATION_REMEMBER, AUTHENTICATION_SUCCESS} from '../reducers/types';

export const login = (username, password) => dispatch => {
    axios
        .post('/api/accounts/login/', null, {auth: {username, password}})
        .then(response => {
            dispatch({
                type: AUTHENTICATION_SUCCESS,
                data: response.data.token,
            });
            console.log(response);
        })
        .catch(response => {

        })


};

export const rememberMe = (rememberMe) => dispatch => {
    dispatch({
        type: AUTHENTICATION_REMEMBER,
        data: rememberMe
    })
};
