import { EDIT_POST_START, EDIT_POST_SUCCESS, EDIT_POST_ERROR, ActionTypes } from '../types';

export const editPostStart = (): ActionTypes => ({
    type: EDIT_POST_START,
});

export const editPostSuccess = (): ActionTypes => ({
    type: EDIT_POST_SUCCESS,
});

export const editPostError = (error: string): ActionTypes => ({
    type: EDIT_POST_ERROR,
    payload: error,
});
