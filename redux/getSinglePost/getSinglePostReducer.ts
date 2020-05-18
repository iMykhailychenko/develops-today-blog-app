import { combineReducers } from 'redux';
import {
    FETCH_SINGLE_POST_START,
    FETCH_SINGLE_POST_SUCCESS,
    FETCH_SINGLE_POST_ERROR,
    PUSH_COMMENT_SUCCESS,
    ActionTypes,
} from '../types';
import { ISinglePost } from '../../interfaces/interfaces';

const initValue: ISinglePost = {
    id: 1,
    title: '',
    body: '',
    comments: [],
};

const loadingSinglePostReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case FETCH_SINGLE_POST_START:
            return true;

        case FETCH_SINGLE_POST_SUCCESS:
            return false;

        default:
            return loading;
    }
};

const getSinglePostReducer = (items: ISinglePost = initValue, action: ActionTypes): ISinglePost => {
    switch (action.type) {
        case FETCH_SINGLE_POST_SUCCESS:
            return action.payload;

        case PUSH_COMMENT_SUCCESS:
            const { comments } = items;
            const newComments = [...comments, { body: action.payload }];
            return {...items, comments: newComments};

        default:
            return items;
    }
};

const errorSinglePostReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case FETCH_SINGLE_POST_START:
        case FETCH_SINGLE_POST_SUCCESS:
            return '';

        case FETCH_SINGLE_POST_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const singlePostReducer = combineReducers({
    loading: loadingSinglePostReducer,
    post: getSinglePostReducer,
    error: errorSinglePostReducer,
});
