import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import videos from "./reducers/videos";
import video from "./reducers/video";
import thunk from "redux-thunk";

export function initStore() {
    const reducers = combineReducers({
        videos,
        video
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

    return store;
}
