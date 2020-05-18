import React from 'react';
import Link from 'next/link';
import { StyledBtn, StyledContainer } from './WritePostBtn.styled';

const WritePostBtn: React.FC<{}> = () => (
    <StyledContainer>
        <Link href="/posts/new">
            <StyledBtn>Write your history now</StyledBtn>
        </Link>
    </StyledContainer>
);

export default WritePostBtn;
