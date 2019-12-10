import {SET_ANSWER_STYLES} from './types';

const initialState = {
    styles: null
};

export default function (state = initialState, action) {
    if (action.type === SET_ANSWER_STYLES) {
        return {...state, styles: action.data}
    }
    return state;
}