import {AUTHENTICATION_REMEMBER, AUTHENTICATION_SUCCESS, AUTHENTICATION_RESTORE} from "../types";

const initialState = {
    isAuthenticated: (
        localStorage.getItem("token") !== null ||
        sessionStorage.getItem("token") !== null
    ),
    rememberPassword: localStorage.getItem("token") !== null,
};


export default function(state = initialState, action){
    if (action.type === AUTHENTICATION_REMEMBER){
        return{...state, rememberPassword: action.data}
    }

    if (action.type === AUTHENTICATION_RESTORE){
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");

        return{...state, isAuthenticated: false}
    }

    if (action.type === AUTHENTICATION_SUCCESS){

        if (state.rememberPassword)
            localStorage.setItem("token", action.data);
        else
            sessionStorage.setItem("token", action.data);

        return{...state, isAuthenticated: true}
    }


    return state;

}
