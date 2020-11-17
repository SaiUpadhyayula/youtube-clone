import {combineReducers} from "redux";

const initVideoReducer = () => {
    const item = (state = {}, action) => {
        switch (action.type) {
            case 'IS_FETCHING_VIDEO':
                return {};
            case 'FETCH_VIDEO_BY_ID':
                return action.video;
            default:
                return state;
        }
    }

    const isFetching = (state = false, action) => {
        switch (action.type) {
            case 'IS_FETCHING_VIDEO':
                return true;
            case 'FETCH_VIDEO_BY_ID':
                return false;
            default:
                return state;
        }
    }

    return combineReducers({
        item,
        isFetching
    });
}

const video = initVideoReducer();
export default video;
