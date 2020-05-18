import { combineReducers } from 'redux';
import { DELETE_POST_START, DELETE_POST_SUCCESS, DELETE_POST_ERROR, ActionTypes } from '../types';

const loadingDeketePostReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case DELETE_POST_START:
            return true;

        case DELETE_POST_SUCCESS:
        case DELETE_POST_ERROR:
            return false;

        default:
            return loading;
    }
};

const successDeletePostReducer = (id: number = 0, action: ActionTypes): number => {
    switch (action.type) {
        case DELETE_POST_SUCCESS:
            return action.payload;

        default:
            return id;
    }
};

const errorDeletePostReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case DELETE_POST_START:
        case DELETE_POST_SUCCESS:
            return '';

        case DELETE_POST_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const pushPostReducer = combineReducers({
    loading: loadingDeketePostReducer,
    postId: successDeletePostReducer,
    error: errorDeletePostReducer,
});
