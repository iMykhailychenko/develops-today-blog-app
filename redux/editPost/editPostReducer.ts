import { combineReducers } from 'redux';
import { EDIT_POST_START, EDIT_POST_SUCCESS, EDIT_POST_ERROR, ActionTypes } from '../types';

const loadingUpdateReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case EDIT_POST_START:
            return true;

        case EDIT_POST_SUCCESS:
        case EDIT_POST_ERROR:
            return false;

        default:
            return loading;
    }
};

const successUpdateReducer = (success: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case EDIT_POST_START:
        case EDIT_POST_ERROR:
            return false;

        case EDIT_POST_SUCCESS:
            return true;

        default:
            return success;
    }
};

const errorUpdateReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case EDIT_POST_START:
        case EDIT_POST_SUCCESS:
            return '';

        case EDIT_POST_ERROR:
            return action.payload;

        default:
            return error;
    }
};


export const editReducer = combineReducers({
    loading: loadingUpdateReducer,
    success: successUpdateReducer,
    error: errorUpdateReducer,
});
