import axios from 'axios';
import { pushCommentStart, pushCommentSuccess, pushCommentError } from './pushCommentActions';
import { Dispatch } from '../types';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const pushComment = (
    dispatch: Dispatch<any>,
    postId: number,
    body: string,
): void => {
    dispatch(pushCommentStart());

    axios
        .post('/comments', {
            postId,
            body,
        })
        .then((response) => {
            if (response.status === 201) {
                dispatch(pushCommentSuccess(body));
            } else {
                pushCommentError('Network response error');
            }
        });
};
