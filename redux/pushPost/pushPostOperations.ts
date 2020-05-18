import axios from 'axios';
import { pushPostError, pushPostStart, pushPostSuccess } from './pushPostActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const pushPost = (
    dispatch: Dispatch<any>,
    title: string,
    body: string,
    loader: (value: boolean) => void,
): void => {
    dispatch(pushPostStart());

    axios
        .post('/posts', {
            title,
            body,
        })
        .then((response) => {
            if (response.status === 201) {
                dispatch(pushPostSuccess());

                // remove preloader
                setTimeout(() => {
                    loader(false);
                }, 1000);
            } else {
                pushPostError('Network response error');
            }
        });
};
