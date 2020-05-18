import { DELETE_POST_START, DELETE_POST_SUCCESS, DELETE_POST_ERROR, ActionTypes } from '../types';

export const deletePostStart = (): ActionTypes => ({
    type: DELETE_POST_START,
});

export const deletePostSuccess = (id: number): ActionTypes => ({
    type: DELETE_POST_SUCCESS,
    payload: id,
});

export const deletePostError = (error: string): ActionTypes => ({
    type: DELETE_POST_ERROR,
    payload: error,
});
