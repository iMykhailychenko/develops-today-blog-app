import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import IState from '../../redux/rootState';
import { fetchSinglePost } from '../../redux/getSinglePost/getSinglePostOperations';

// components
import PageTemplate from '../../conponents/PageTemplate/PageTemplate';
import EditPostForm from '../../conponents/EditPostForm/EditPostForm';
import { StyledPageTitle } from '../../conponents/PageTitle/PageTitle.styled';

const New: React.FC<{}> = () => {
    const post = useSelector((state: IState) => state.singlePost.post);
    const dispatch = useDispatch();

    // get post by id from query string
    const router = useRouter();
    const postId = typeof router.query.id === 'string' && router.query.id;
    useEffect(fetchSinglePost(dispatch, postId), []);

    const { title, body } = post;

    return (
        <PageTemplate>
            <StyledPageTitle>Edit the post</StyledPageTitle>
            <EditPostForm initTitle={title} initBody={body} postId={postId} />
        </PageTemplate>
    );
};

export default New;
