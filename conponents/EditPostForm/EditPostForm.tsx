import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IState from '../../redux/rootState';
import { editPost } from '../../redux/editPost/editPostOperations';

// components
import Loader from 'react-loader-spinner';
import { StyledTitleInput, StyledTextarea, StyledSubmit } from '../NewPostForm/NewPostForm.styled';
import { StyledLoaderWrp, StyledLoaderSuccess } from '../NewPostFormLoader/NewPostFormLoader.styled';

interface Props {
    initTitle: string;
    initBody: string;
    postId: string;
}

const NewPostForm: React.FC<Props> = ({ initTitle, initBody, postId }) => {
    const [title, setTitle] = useState(initTitle);
    const [body, setBody] = useState(initBody);
    const dispatch = useDispatch();

    const handleChenge = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        name === 'title' ? setTitle(value) : setBody(value);
    };

    // preloader for better UX
    const [isLoading, setLoader] = useState(false);
    const loading = useSelector((state: IState) => state.editPost.loading);
    const success = useSelector((state: IState) => state.editPost.success);

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        // init preloader
        setLoader(true);

        // dispatch
        editPost(dispatch, postId, title, body, setLoader);
    };

    return (
        <>
            <form action="" method="post" onSubmit={handleSubmit}>
                <StyledTitleInput
                    type="text"
                    name="title"
                    placeholder="Add your post title here"
                    onChange={handleChenge}
                    value={title}
                />

                <StyledTextarea
                    name="body"
                    cols="30"
                    rows="6"
                    placeholder="Add your post content here"
                    onChange={handleChenge}
                    value={body}
                />

                <StyledSubmit type="submit">Update post</StyledSubmit>
            </form>

            {isLoading && (
                <StyledLoaderWrp>
                    {loading && <Loader type="Puff" color="#00BFFF" height={40} width={40} />}
                    {success && <StyledLoaderSuccess>Post updated</StyledLoaderSuccess>}
                </StyledLoaderWrp>
            )}
        </>
    );
};

export default NewPostForm;
