import { PUSH_POST_START, PUSH_POST_SUCCESS, PUSH_POST_ERROR, ActionTypes } from '../types';

export const pushPostStart = (): ActionTypes => ({
    type: PUSH_POST_START,
});

export const pushPostSuccess = (): ActionTypes => ({
    type: PUSH_POST_SUCCESS,
});

export const pushPostError = (error: string): ActionTypes => ({
    type: PUSH_POST_ERROR,
    payload: error,
});
