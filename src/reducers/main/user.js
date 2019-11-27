import {AUTHENTICATION_RESTORE, SET_CURRENT_USER} from "../types";

const initialState = {
    id: null,
    email: null,
    group: null,
};


export default function(state=initialState, action) {
    if (action.type === AUTHENTICATION_RESTORE)
        return initialState;

    if (action.type === SET_CURRENT_USER)
        return {...state, ...action.data};

    return state;
}