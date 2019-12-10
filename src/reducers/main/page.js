import {SET_CURRENT_ROUTE, SET_CURRENT_ACTION} from "../types";

const initialState = {
    route: "dashboard",
    action: "default",
};


export default function (state = initialState, action) {

    if (action.type === SET_CURRENT_ROUTE)
        return {...state, route: action.data, action: "default"};

    if (action.type === SET_CURRENT_ACTION)
        return {...state, action: action.data};

    return state;
}