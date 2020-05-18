import axios from 'axios';
import { fetchPostStart, fetchPostSuccess, fetchPostError } from './getPostsActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const fetchPosts = (dispatch: Dispatch<any>): (() => void) => (): void => {
    dispatch(fetchPostStart());

    axios.get('/posts').then((response) => {
        if (response.status === 200) {
            dispatch(fetchPostSuccess(response.data));
        } else {
            dispatch(fetchPostError('Network response error'));
        }
    });
};