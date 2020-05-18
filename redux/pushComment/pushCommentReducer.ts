import { combineReducers } from 'redux';
import { PUSH_COMMENT_START, PUSH_COMMENT_SUCCESS, PUSH_COMMENT_ERROR, ActionTypes } from '../types';

const loadingCommentReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case PUSH_COMMENT_START:
            return true;

        case PUSH_COMMENT_SUCCESS:
        case PUSH_COMMENT_ERROR:
            return false;

        default:
            return loading;
    }
};

const successCommentReducer = (comment: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case PUSH_COMMENT_SUCCESS:
            return action.payload;

        default:
            return comment;
    }
};

const errorCommentReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case PUSH_COMMENT_START:
        case PUSH_COMMENT_SUCCESS:
            return '';

        case PUSH_COMMENT_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const pushCommentReducer = combineReducers({
    loading: loadingCommentReducer,
    success: successCommentReducer,
    error: errorCommentReducer,
});
