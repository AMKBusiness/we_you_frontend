import axios from "axios";
import { SET_CURRENT_USER } from "../reducers/types";

export const groups = Object.freeze({
    admin: 1,
    management: 2,
    employer: 3,
    employee: 4,
});


export const initialize_user = () => dispatch => {
    const session = localStorage.getItem("token") || sessionStorage.getItem("token");
    const headers = {"Authorization": `Token ${session}`};

    axios
        .get("/api/accounts/user/",{headers})
        .then(response => dispatch({type: SET_CURRENT_USER, data: response.data}))
};