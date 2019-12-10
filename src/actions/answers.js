import axios from "axios";
import {SET_ANSWER_STYLES} from "../reducers/answers/types";

export const loadStyles = () => dispatch => {
    const session = localStorage.getItem("token") || sessionStorage.getItem("token");
    const headers = {"Authorization": `Token ${session}`};

    axios
        .get('/api/activities/answer-styles/', {headers})
        .then(response => dispatch({
            type: SET_ANSWER_STYLES,
            data: response.data
        }));
};