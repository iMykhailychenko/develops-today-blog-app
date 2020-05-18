import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IState from '../../redux/rootState';
import { pushPost } from '../../redux/pushPost/pushPostOperations';

// components
import Loader from 'react-loader-spinner';
import { StyledTitleInput, StyledTextarea, StyledSubmit } from './NewPostForm.styled';
import { StyledLoaderWrp, StyledLoaderSuccess } from '../NewPostFormLoader/NewPostFormLoader.styled';

const NewPostForm: React.FC<{}> = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleChenge = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        name === 'title' ? setTitle(value) : setBody(value);
    };

    // preloader for better UX
    const [isLoading, setLoader] = useState(false);
    const loading = useSelector((state: IState) => state.pushPost.loading);
    const success = useSelector((state: IState) => state.pushPost.success);

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        // init preloader
        setLoader(true);

        // dispatch
        pushPost(dispatch, title, body, setLoader);

        // reset form
        setTitle('');
        setBody('');
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

                <StyledSubmit type="submit">Publicate</StyledSubmit>
            </form>

            {isLoading && (
                <StyledLoaderWrp>
                    {loading && <Loader type="Puff" color="#00BFFF" height={40} width={40} />}
                    {success && <StyledLoaderSuccess>Published</StyledLoaderSuccess>}
                </StyledLoaderWrp>
            )}
        </>
    );
};

export default NewPostForm;
