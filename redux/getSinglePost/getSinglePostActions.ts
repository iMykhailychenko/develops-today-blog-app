import { ISinglePost } from '../../interfaces/interfaces';
import { FETCH_SINGLE_POST_START, FETCH_SINGLE_POST_SUCCESS, FETCH_SINGLE_POST_ERROR, ActionTypes } from '../types';

export const fetchSinglePostStart = (): ActionTypes => ({
    type: FETCH_SINGLE_POST_START,
});

export const fetchSinglePostSuccess = (post: ISinglePost): ActionTypes => ({
    type: FETCH_SINGLE_POST_SUCCESS,
    payload: post,
});

export const fetchSinglePostError = (error: string): ActionTypes => ({
    type: FETCH_SINGLE_POST_ERROR,
    payload: error,
});
