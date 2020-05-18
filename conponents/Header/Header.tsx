import React from 'react';
import { useRouter } from 'next/router';
import Navigation from './Navigation/Navigation';
import MainTitle from './MainTitle/MianTitle';
import { StyledHeader } from './Header.styled';
import { StyledContainer } from '../Container/Container.styled';

const Header: React.FC<{}> = () => {
    const router = useRouter();

    return (
        <StyledHeader>
            <StyledContainer>
                <Navigation />
                {router.pathname === '/' && <MainTitle />}
            </StyledContainer>
        </StyledHeader>
    );
};

export default Header;
