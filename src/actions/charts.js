import axios from 'axios';

import { SET_DASHBOARD_CHARTS_CONTENT} from "../reducers/types";


export const set_dashboard_data = () => dispatch => {


    const session = localStorage.getItem("token") || sessionStorage.getItem("token");
    const headers = {"Authorization": `Token ${session}`};

    axios
        .get("", {headers})
        .then(response => {
            dispatch({type: SET_DASHBOARD_CHARTS_CONTENT, data: response.data})
        })
};


export const charts = [{
    arg: "11 december",
    val: 40
}, {
    arg: "12 december",
    val: 66
}, {
    arg: "13 december",
    val: 78
}, {
    arg: "14 december",
    val: 15
}, {
    arg: "15 december",
    val: 94
}, {
    arg: "16 december",
    val: 83
}];