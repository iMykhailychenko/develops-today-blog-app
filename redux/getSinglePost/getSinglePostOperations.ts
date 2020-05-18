import axios from 'axios';
import { fetchSinglePostError, fetchSinglePostStart, fetchSinglePostSuccess } from './getSinglePostActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const fetchSinglePost = (dispatch: Dispatch<any>, page: string): (() => void) => (): void => {
    dispatch(fetchSinglePostStart());

    axios.get(`/posts/${page}?_embed=comments`).then((response) => {
        if (response.status === 200) {
            dispatch(fetchSinglePostSuccess(response.data));
        } else {
            dispatch(fetchSinglePostError('Network response error'));
        }
    });
};
