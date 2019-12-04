import {
    SET_COMPANIES_NAME,
    SET_COMPANIES_LOGO,
    SET_COMPANIES_THEME_COLOUR,

    ADD_COMPANIES_STAFF_MEMBER,
    SET_COMPANIES_STAFF_MEMBER,
    DEL_COMPANIES_STAFF_MEMBER,
    ERR_COMPANIES_STAFF_MEMBER,
} from "./types";


const initialState = {
    name: null,
    logo: {
        id: null,
        path: null,
        mime: null,
        data: null,
    },

    theme: {
        id: null,

        accent: "#E94248",
        primary: "#26223D",
    },

    employees: [],
    employers: [],

    errors: {
        employees: [],
        employers: [],
    }
};

export default function(state = initialState, action) {

    if (action.type === SET_COMPANIES_NAME)
        return {...state, name: action.data};

    if (action.type === SET_COMPANIES_LOGO)
        return {...state, logo: action.data};

    if (action.type === SET_COMPANIES_THEME_COLOUR)
        return {...state, theme: {...state.theme, [action.data.field]: action.data.value}};



    if (action.type === ADD_COMPANIES_STAFF_MEMBER)
        return {...state,
            [action.data]: [...state[action.data], null],
            errors: {[action.data]: [...state[action.data], {}]
        }};

    if (action.type === SET_COMPANIES_STAFF_MEMBER) {
        const members = [
            ...state[action.data.type].slice(0, action.data.index),
            action.data.value,
            ...state[action.data.type].slice(action.data.index + 1)
        ];

        return {...state, [action.data.type]: members};
    }

    if (action.type === DEL_COMPANIES_STAFF_MEMBER) {
        const members = [
            ...state[action.data.type].slice(0, action.data.index),
            ...state[action.data.type].slice(action.data.index + 1)
        ];

        const errors = [
            ...state.errors[action.data.type].slice(0, action.data.index),
            ...state.errors[action.data.type].slice(action.data.index + 1)
        ];

        return {
            ...state, [action.data.type]: members, errors: {
            ...state.errors, [action.data.type]: errors
        }};
    }

    if (action.type === ERR_COMPANIES_STAFF_MEMBER) {
        const errors = [
            ...state.errors[action.data.type].slice(0, action.data.index),
            action.data.value,
            ...state.errors[action.data.type].slice(action.data.index + 1)
        ];

        return {...state, errors: {...state.errors, [action.data.type]: errors}};
    }

    return state;
}