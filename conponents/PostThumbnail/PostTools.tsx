import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Toggler from '../../render-prop/Toggler';
import { deletePost } from '../../redux/deletePost/deletePostOperations';
import { StyledPostOptions, StyledPostModal, StyledPostOptionsBtn } from './PostThumbnail.styled';

interface Props {
    id: number;
}

const PostTools: React.FC<Props> = ({ id }) => {
    const dispatch = useDispatch();

    const handleClick = (): void => {
        deletePost(dispatch, id);
    };

    return (
        <Toggler>
            {({ isOpen, onToggle }) => (
                <>
                    <StyledPostOptions onClick={() => onToggle(!isOpen)}>
                        <span />
                        <span />
                        <span />
                    </StyledPostOptions>

                    {isOpen && (
                        <StyledPostModal>
                            <li>
                                <StyledPostOptionsBtn onClick={handleClick}>Delete post</StyledPostOptionsBtn>
                            </li>
                            <li>
                                <Link href={`/posts/edit?id=${id}`} as="/posts/edit">
                                    <StyledPostOptionsBtn as="a">Edit post</StyledPostOptionsBtn>
                                </Link>
                            </li>
                        </StyledPostModal>
                    )}
                </>
            )}
        </Toggler>
    );
};

export default PostTools;
