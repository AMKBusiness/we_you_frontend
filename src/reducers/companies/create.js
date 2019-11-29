import {SET_COMPANIES_CREATE, FLUSH_COMPANIES_CREATE} from "./types";

const initialState = {
    name: "",
    members: [],
};

export default function (state = initialState, action) {
    if (action.type === FLUSH_COMPANIES_CREATE)
        return initialState;

    if (action.type === SET_COMPANIES_CREATE)

    return state;
}