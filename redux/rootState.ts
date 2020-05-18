import { IAllPosts, ISinglePost } from '../interfaces/interfaces';

interface IState {
    posts: {
        loading: boolean;
        items: IAllPosts[];
        error: '';
    };
    singlePost: {
        loading: boolean;
        post: ISinglePost;
        error: '';
    };
    pushPost: {
        loading: boolean;
        success: boolean;
        error: '';
    };
    deletePost: {
        loading: boolean;
        id: number;
        error: '';
    };
    editPost: {
        loading: boolean;
        success: boolean;
        error: '';
    };
}

export default IState;
