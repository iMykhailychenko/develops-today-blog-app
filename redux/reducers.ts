import { combineReducers } from 'redux';
import { postsReducer } from './getPosts/getPostsReducer';
import { singlePostReducer } from './getSinglePost/getSinglePostReducer';
import { pushPostReducer } from './pushPost/pushPostReducer';
import { editReducer } from './editPost/editPostReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    singlePost: singlePostReducer,
    pushPost: pushPostReducer,
    editPost: editReducer,
});

export default rootReducer;
