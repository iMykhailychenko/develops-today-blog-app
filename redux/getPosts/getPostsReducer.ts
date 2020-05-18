import { combineReducers } from 'redux';
import { FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, DELETE_POST_SUCCESS, ActionTypes } from '../types';
import { IAllPosts } from '../../interfaces/interfaces';

const loadingPostsReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case FETCH_POSTS_START:
            return true;

        case FETCH_POSTS_SUCCESS:
            return false;

        default:
            return loading;
    }
};

const getPostsReducer = (items: IAllPosts[] = [], action: ActionTypes): IAllPosts[] => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return action.payload;

        case DELETE_POST_SUCCESS:
            return items.filter(post => post.id !== action.payload);

        default:
            return items;
    }
};

const errorPostsReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case FETCH_POSTS_START:
        case FETCH_POSTS_SUCCESS:
            return '';

        case FETCH_POSTS_ERROR:
            return action.payload;

        default:
            return error;
    }
};


export const postsReducer = combineReducers({
    loading: loadingPostsReducer,
    items: getPostsReducer,
    error: errorPostsReducer,
});
