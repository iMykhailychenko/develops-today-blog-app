import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import IState from '../../redux/rootState';
import { fetchSinglePost } from '../../redux/getSinglePost/getSinglePostOperations';

// components
import Loader from 'react-loader-spinner';
import { StyledLoaderWrp } from '../../conponents/Loader/LoaderWrp.styled';
import PageTemplate from '../../conponents/PageTemplate/PageTemplate';
import PostContent from '../../conponents/PostContent/PostContent';
import { StyledPageTitle } from '../../conponents/PageTitle/PageTitle.styled';

const Post: React.FC<{}> = () => {
    const post = useSelector((state: IState) => state.singlePost.post);
    const loading = useSelector((state: IState) => state.singlePost.loading);
    const dispatch = useDispatch();

    // current page
    const router = useRouter();
    const page = typeof router.query.postId === 'string' && router.query.postId;

    useEffect(fetchSinglePost(dispatch, page), []);

    return (
        <PageTemplate>
            {loading ? (
                <StyledLoaderWrp>
                    <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
                </StyledLoaderWrp>
            ) : (
                <>
                    <StyledPageTitle>{post.title}</StyledPageTitle>
                    <PostContent {...post} />
                </>
            )}
        </PageTemplate>
    );
};

export default Post;
