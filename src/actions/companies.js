import axios from 'axios';

import {
    SET_COMPANIES_THEME_COLOUR,
    SET_COMPANIES_LOGO,
    SET_COMPANIES_NAME,

    ADD_COMPANIES_STAFF_MEMBER,
    SET_COMPANIES_STAFF_MEMBER,
    DEL_COMPANIES_STAFF_MEMBER,
    ERR_COMPANIES_STAFF_MEMBER, ERR_COMPANIES_LOGO,
} from "../reducers/companies/types";

export const set_name = name => ({
    type: SET_COMPANIES_NAME,
    data: name,
})

export const set_logo = (path, mime, data) => ({
    type: SET_COMPANIES_LOGO,
    data: {id: null, path, mime, data}
});

export const set_colour = (field, value) => ({
    type: SET_COMPANIES_THEME_COLOUR,
    data: {field, value}
});

export const add_staff_member = type => ({
    type: ADD_COMPANIES_STAFF_MEMBER,
    data: type,
});

export const del_staff_member = (type, index) => ({
    type: DEL_COMPANIES_STAFF_MEMBER,
    data: {type, index},
});

export const set_staff_member = (type, index, value) => ({
    type: SET_COMPANIES_STAFF_MEMBER,
    data: {type, index, value}
});

export const err_staff_member = (type, index, value) => ({
    type: ERR_COMPANIES_STAFF_MEMBER,
    data: {type, index, value}
});


export const create_logo = (path, mime, data) => dispatch => {
    data = data.indexOf(",") === -1 ? data : data.slice(data.indexOf(","));

    const session = sessionStorage.getItem("token") || sessionStorage.getItem("token");
    const headers = {Authorization: `Token ${session}`};

    return axios
        .post("/companies/company-logo/", {path, mime, data}, {headers})
        .then(response => dispatch({
            type: SET_COMPANIES_LOGO,
            data: response.data,

        }))
        .catch(response => dispatch({
            type: ERR_COMPANIES_LOGO,
            data: response.data,
        }))
};

export const create_theme = (primary, accent, logo) => dispatch => {

};