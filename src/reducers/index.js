import {combineReducers} from "redux";

import auth from "./auth";
import page from "./page";
import theme from "./theme";

export default combineReducers({
    auth,
    page,
    theme,
});