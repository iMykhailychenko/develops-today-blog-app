import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import IState from '../../redux/rootState';
import { fetchSinglePost } from '../../redux/getSinglePost/getSinglePostOperations';

// components
import Loader from 'react-loader-spinner';
import { StyledLoaderWrp } from '../../conponents/Loader/LoaderWrp.styled';
import PageTemplate from '../../conponents/PageTemplate/PageTemplate';
import EditPostForm from '../../conponents/EditPostForm/EditPostForm';
import { StyledPageTitle } from '../../conponents/PageTitle/PageTitle.styled';

const New: React.FC<{}> = () => {
    const post = useSelector((state: IState) => state.singlePost.post);
    const loading = useSelector((state: IState) => state.singlePost.loading);
    const dispatch = useDispatch();

    // get post by id from query string
    const router = useRouter();
    const postId = typeof router.query.id === 'string' && router.query.id;
    useEffect(fetchSinglePost(dispatch, postId), []);

    const { title, body } = post;

    return (
        <PageTemplate>
            <StyledPageTitle>Edit the post</StyledPageTitle>

            {loading ? (
                <StyledLoaderWrp>
                    <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
                </StyledLoaderWrp>
            ) : (
                <EditPostForm initTitle={title} initBody={body} postId={postId} />
            )}
        </PageTemplate>
    );
};

export default New;
