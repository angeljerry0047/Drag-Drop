import * as Main from "../actiontypes/main";
export function login(data) {
    return async dispatch => {
        try {
            dispatch({ type: Main.SAVE_USER, data });
        } catch (e) {
        };
    }
}
