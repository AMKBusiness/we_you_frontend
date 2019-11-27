import {combineReducers} from "redux";

import auth from "./auth";
import user from "./user";
import page from "./page";
import theme from "./theme";

export default combineReducers({
    auth,
    user,
    page,
    theme,
});