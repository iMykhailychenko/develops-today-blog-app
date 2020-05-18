import axios from 'axios';
import { deletePostStart, deletePostSuccess, deletePostError } from './deletePostActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const deletePost = (dispatch: Dispatch<any>, id: number): void => {
    dispatch(deletePostStart());

    axios
        .delete(`/posts/${id}`)
        .then((response) => {
            if (response.status === 200) {
                dispatch(deletePostSuccess(id));
            } else {
                deletePostError('Network response error');
            }
        });
};
