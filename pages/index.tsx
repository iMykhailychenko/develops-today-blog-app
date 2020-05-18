import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IState from '../redux/rootState';
import { fetchPosts } from '../redux/getPosts/getPostsOperations';

// components
import Loader from 'react-loader-spinner';
import { StyledLoaderWrp } from '../conponents/Loader/LoaderWrp.styled';
import WritePostBtn from '../conponents/WritePostBtn/WritePostBtn';
import PageTemplate from '../conponents/PageTemplate/PageTemplate';
import PostThumbnail from '../conponents/PostThumbnail/PostThumbnail';
import { StyledPageTitle } from '../conponents/PageTitle/PageTitle.styled';

const Home: React.FC<{}> = () => {
    const posts = useSelector((state: IState) => state.posts.items);
    const loading = useSelector((state: IState) => state.posts.loading);
    const dispatch = useDispatch();

    useEffect(fetchPosts(dispatch), []);

    return (
        <PageTemplate>
            <StyledPageTitle>View the latest posts</StyledPageTitle>

            {loading ? (
                <StyledLoaderWrp>
                    <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
                </StyledLoaderWrp>
            ) : (
                <PostThumbnail posts={posts} />
            )}

            <WritePostBtn />
        </PageTemplate>
    );
};

export default Home;
