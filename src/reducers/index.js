import {combineReducers} from "redux";

import auth from "./main/auth";
import user from "./main/user";
import page from "./main/page";
import theme from "./main/theme";

import companies from "./companies";
import dashboard from "./dashboard";
import answers from "./answers";

export default combineReducers({
    auth,
    user,
    page,
    theme,
    answers,

    companies,
    dashboard,
});