import {SET_DASHBOARD_CHARTS_CONTENT} from "./types";

const initialState = {
    loaded: false,
    content: [],
};

export default function(state=initialState, action) {

    if (action.type === SET_DASHBOARD_CHARTS_CONTENT)
        return {...state, loaded: true, content: action.data};

    return state;
}