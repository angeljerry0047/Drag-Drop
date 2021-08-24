import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

import { debug } from "../common/debug";

export function createMiddleware(){
    const logger = createLogger();
    const navigationHelper = createReactNavigationReduxMiddleware(
        "root",
        state => state.mainReducer,
    );
    let middlewares = [thunk,navigationHelper];
    if(debug){
        middlewares.push(logger);
    }
    return middlewares;
}