import { IAllPosts, ISinglePost } from '../interfaces/interfaces';

// fetch all posts
export const FETCH_POSTS_START = 'SWITCH_THEME';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

// fetch single post
export const FETCH_SINGLE_POST_START = 'FETCH_SINGLE_POST_START';
export const FETCH_SINGLE_POST_SUCCESS = 'FETCH_SINGLE_POST_SUCCESS';
export const FETCH_SINGLE_POST_ERROR = 'FETCH_SINGLE_POST_ERROR';

// push post
export const PUSH_POST_START = 'PUSH_POST_START';
export const PUSH_POST_SUCCESS = 'PUSH_POST_SUCCESS';
export const PUSH_POST_ERROR = 'PUSH_POST_ERROR';

// delete post
export const DELETE_POST_START = 'DELETE_POST_START';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

// edit post
export const EDIT_POST_START = 'EDIT_POST_START';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_ERROR = 'EDIT_POST_ERROR';

// new comment
export const PUSH_COMMENT_START = 'PUSH_COMMENT_START';
export const PUSH_COMMENT_SUCCESS = 'PUSH_COMMENT_SUCCESS';
export const PUSH_COMMENT_ERROR = 'PUSH_COMMENT_ERROR';

// Fetch all posts - Action types
interface FetchPostsStart {
    type: typeof FETCH_POSTS_START;
    payload?: boolean;
}
interface FetchPostsSuccess {
    type: typeof FETCH_POSTS_SUCCESS;
    payload: IAllPosts[];
}
interface FetchPostsError {
    type: typeof FETCH_POSTS_ERROR;
    payload: string;
}

// Fetch single post - Action types
interface FetchSinglePostStart {
    type: typeof FETCH_SINGLE_POST_START;
    payload?: boolean;
}
interface FetchSinglePostSuccess {
    type: typeof FETCH_SINGLE_POST_SUCCESS;
    payload: ISinglePost;
}
interface FetchSinglePostError {
    type: typeof FETCH_SINGLE_POST_ERROR;
    payload: string;
}

// Push post - Action types
interface CreatePostStart {
    type: typeof PUSH_POST_START;
    payload?: boolean;
}
interface CreatePostSuccess {
    type: typeof PUSH_POST_SUCCESS;
    payload?: boolean;
}
interface CreatePostError {
    type: typeof PUSH_POST_ERROR;
    payload: string;
}

// Delete post - Action types
interface DeletePostStart {
    type: typeof DELETE_POST_START;
    payload?: boolean;
}
interface DeletePostSuccess {
    type: typeof DELETE_POST_SUCCESS;
    payload: number;
}
interface DeletePostError {
    type: typeof DELETE_POST_ERROR;
    payload: string;
}

// Edit post - Action types
interface EditPostStart {
    type: typeof EDIT_POST_START;
    payload?: boolean;
}
interface EditPostSuccess {
    type: typeof EDIT_POST_SUCCESS;
    payload?: boolean;
}
interface EditPostError {
    type: typeof EDIT_POST_ERROR;
    payload: string;
}

// New comment - Action types
interface PushCommentStart {
    type: typeof PUSH_COMMENT_START;
    payload?: boolean;
}
interface PushCommentSuccess {
    type: typeof PUSH_COMMENT_SUCCESS;
    payload: string;
}
interface PushCommentError {
    type: typeof PUSH_COMMENT_ERROR;
    payload: string;
}

export type ActionTypes =
    | FetchPostsStart
    | FetchPostsSuccess
    | FetchPostsError
    | FetchSinglePostStart
    | FetchSinglePostSuccess
    | FetchSinglePostError
    | CreatePostStart
    | CreatePostSuccess
    | CreatePostError
    | DeletePostStart
    | DeletePostSuccess
    | DeletePostError
    | PushCommentStart
    | PushCommentSuccess
    | PushCommentError
    | EditPostStart
    | EditPostSuccess
    | EditPostError;

export interface Dispatch<S> {
    <A extends ActionTypes>(action: A): A;
}
