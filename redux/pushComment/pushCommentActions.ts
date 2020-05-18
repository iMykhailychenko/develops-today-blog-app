import {
    PUSH_COMMENT_START,
    PUSH_COMMENT_SUCCESS,
    PUSH_COMMENT_ERROR,
    ActionTypes,
} from '../types';

export const pushCommentStart = (): ActionTypes => ({
    type: PUSH_COMMENT_START,
});

export const pushCommentSuccess = (comment: string): ActionTypes => ({
    type: PUSH_COMMENT_SUCCESS,
    payload: comment,
});

export const pushCommentError = (error: string): ActionTypes => ({
    type: PUSH_COMMENT_ERROR,
    payload: error,
});
