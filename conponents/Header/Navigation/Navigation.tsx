import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../Logo/Logo';
import { StyledNav, StyledList, StyledLink, StyledBtn } from './Navigation.styled';

const Navigation: React.FC<{}> = () => {
    const router = useRouter();

    return (
        <StyledNav>
            <Logo />

            <StyledList>
                {!(router.pathname === '/') && (
                    <li>
                        <Link href="/">
                            <StyledLink>Home</StyledLink>
                        </Link>
                    </li>
                )}
                <li>
                    <Link href="/posts/new">
                        <StyledBtn>Write new post</StyledBtn>
                    </Link>
                </li>
            </StyledList>
        </StyledNav>
    );
};

export default Navigation;
