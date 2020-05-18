import { IAllPosts } from '../../interfaces/interfaces';
import { FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, ActionTypes } from '../types';

export const fetchPostStart = (): ActionTypes => ({
    type: FETCH_POSTS_START,
});

export const fetchPostSuccess = (posts: IAllPosts[]): ActionTypes => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

export const fetchPostError = (error: string): ActionTypes => ({
    type: FETCH_POSTS_ERROR,
    payload: error,
});
