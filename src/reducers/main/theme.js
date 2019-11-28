
import {SET_THEME_COLORS, RESTORE_MAIN_THEME} from "../types";

const initialState = {
    color: {
        primary: 0x26223D,
        accent: 0xEA4249,
    },
    logo: {

    }
};

export default function(state=initialState, action) {
    if (action.type === RESTORE_MAIN_THEME) {
        return initialState;
    }

    if (action.type === SET_THEME_COLORS) {
        return {...state, color: {
            primary: action.data.primary,
            accent: action.data.accent,
        }}
    }

    return state;
}