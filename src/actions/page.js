import history from "../history";

import { SET_CURRENT_ROUTE, SET_CURRENT_ACTION} from "../reducers/types";

export const set_route = (route, prefix="/main/") => {

    history.push(prefix + route + "/");

    return {
        type: SET_CURRENT_ROUTE,
        data: route
    }
};

export const set_action = action => ({
    type: SET_CURRENT_ACTION,
    data: action,
});
