import axios from 'axios';
import { editPostStart, editPostSuccess, editPostError } from './aditPostActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const editPost = (
    dispatch: Dispatch<any>,
    id: string,
    title: string,
    body: string,
    loader: (value: boolean) => void,
): void => {
    dispatch(editPostStart());

    axios
        .put(`/posts/${id}`, {
            title,
            body,
        })
        .then((response) => {
            if (response.status === 200) {
                dispatch(editPostSuccess());

                // remove preloader
                setTimeout(() => {
                    loader(false);
                }, 1000);
            } else {
                dispatch(editPostError('Network response error'));
            }
        });
};
