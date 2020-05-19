import React from 'react';
import Link from 'next/link';
import PostTools from './PostTools';
import {
    StyledPostList,
    StyledPostItem,
    StyledPostLink,
    StyledPostTitle,
    StyledPostText,
    StyledNoPost,
} from './PostThumbnail.styled';
import { IAllPosts } from '../../interfaces/interfaces';

interface Props {
    posts: IAllPosts[];
}

const PostThumbnail: React.FC<Props> = ({ posts }) =>
    !!posts.length ? (
        <StyledPostList>
            {posts.map(({ id, title = '', body = '' }) => (
                <StyledPostItem key={id}>
                    <PostTools id={id} />

                    <Link href="/posts/[postId]" as={`/posts/${id}`}>
                        <StyledPostLink>
                            <StyledPostTitle>{title}</StyledPostTitle>

                            <StyledPostText>{body.length > 125 ? `${body.slice(0, 125)}...` : body}</StyledPostText>
                        </StyledPostLink>
                    </Link>
                </StyledPostItem>
            ))}
        </StyledPostList>
    ) : (
        <StyledNoPost>Opss. No posts yet</StyledNoPost>
    );

export default PostThumbnail;
