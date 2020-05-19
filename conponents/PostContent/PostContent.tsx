import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ISinglePost } from '../../interfaces/interfaces';
import { pushComment } from '../../redux/pushComment/pushCommentOperations';

// components
import {
    StyledText,
    StyledCommentsTitle,
    StyledCommentsItem,
    StyledCommentText,
    StyledTextarea,
    StyledSubmit,
    StyledUser,
} from './PostContent.styed';

const PostContent: React.FC<ISinglePost> = ({ id, body, comments }) => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const handleChenge = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        const { value } = event.target;
        setComment(value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        // dispatch
        pushComment(dispatch, id, comment);

        // reset form
        setComment('');
    };

    return (
        <>
            <StyledText>{body}</StyledText>

            {!!comments.length && (
                <>
                    <StyledCommentsTitle>Comments:</StyledCommentsTitle>
                    <ul>
                        {comments.map(({ body }, index) => (
                            <StyledCommentsItem key={index}>
                                <img src="/user.png" alt="" />
                                <div>
                                    <StyledUser>Anonymous user</StyledUser>
                                    <StyledCommentText>{body}</StyledCommentText>
                                </div>
                            </StyledCommentsItem>
                        ))}
                    </ul>
                </>
            )}

            <form action="" method="post" onSubmit={handleSubmit}>
                <StyledTextarea
                    name="content"
                    cols="30"
                    rows="4"
                    placeholder="Comment this post"
                    onChange={handleChenge}
                    value={comment}
                />
                <StyledSubmit type="submit">Comment</StyledSubmit>
            </form>
        </>
    );
};

export default PostContent;
