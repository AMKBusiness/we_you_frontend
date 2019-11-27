import axios from "axios";

import {AUTHENTICATION_REMEMBER, AUTHENTICATION_SUCCESS, AUTHENTICATION_RESTORE} from '../reducers/types';

export const login = (username, password) => dispatch => {
    axios
        .post('/api/accounts/login/', null, {auth: {username, password}})
        .then(response => {
            dispatch({
                type: AUTHENTICATION_SUCCESS,
                data: response.data.token,
            });
        })
        .catch(response => {

        })


};

export const logout = () => dispatch => {

    const session = localStorage.getItem("token") || sessionStorage.getItem("token");
    const headers = {"Authorization": `Token ${session}`};

    axios
        .post("/api/accounts/logout/", null, {headers})
        .then(response => {
            dispatch({
                type: AUTHENTICATION_RESTORE,
                data: null,
            });
        })
};

export const rememberMe = (rememberMe) => dispatch => {
    dispatch({
        type: AUTHENTICATION_REMEMBER,
        data: rememberMe
    })
};
