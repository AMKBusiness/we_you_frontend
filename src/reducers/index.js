import {combineReducers} from "redux";

import auth from "./main/auth";
import user from "./main/user";
import page from "./main/page";
import theme from "./main/theme";

import dashboard from "./dashboard";

export default combineReducers({
    auth,
    user,
    page,
    theme,

    dashboard,
});