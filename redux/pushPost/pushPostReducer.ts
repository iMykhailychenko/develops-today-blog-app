import { combineReducers } from 'redux';
import { PUSH_POST_START, PUSH_POST_SUCCESS, PUSH_POST_ERROR, ActionTypes } from '../types';

const loadingNewPostReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case PUSH_POST_START:
            return true;

        case PUSH_POST_SUCCESS:
        case PUSH_POST_ERROR:
            return false;

        default:
            return loading;
    }
};

const successNewPostReducer = (success: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case PUSH_POST_START:
        case PUSH_POST_ERROR:
            return false;

        case PUSH_POST_SUCCESS:
            return true;

        default:
            return success;
    }
};

const errorNewPostReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case PUSH_POST_START:
        case PUSH_POST_SUCCESS:
            return '';

        case PUSH_POST_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const pushPostReducer = combineReducers({
    loading: loadingNewPostReducer,
    success: successNewPostReducer,
    error: errorNewPostReducer,
});
