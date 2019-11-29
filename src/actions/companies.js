import axios from 'axios';

export const create_logo = (path, mime, data) => dispatch => {

    const session = localStorage.getItem("token") || sessionStorage.getItem("token");
    const headers = {Authorization: `Token ${session}`};

    axios
        .post("", {path, mime, data}, {headers})
        .then(response => {
            dispatch({})
        })
};


export const create_theme = (primary, accent, logo) => dispatch => {

    const session = localStorage.getItem("token") || sessionStorage.getItem("token");
    const headers = {Authorization: `Token ${session}`};

    axios
        .post("", {}, {headers})
        .then(response => {

        })
};

export const create_company = (name, employers, employees) => dispatch => {
    const session = localStorage.getItem("token") || sessionStorage.getItem("token")
    const headers = {Authorization: `Token ${session}`};

    axios
        .post("/", {name}, {headers})
        .then(response => {



        })
};