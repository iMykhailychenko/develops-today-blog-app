import styled from 'styled-components';

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledLink = styled.a`
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 300;

    @media (min-width: 768px) {
        margin-right: 40px;
    }
`;

export const StyledBtn = styled.a`
    display: block;
    padding: 10px 30px;
    background-color: rgb(3, 168, 124);
    border-radius: 8px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 1.1rem;
    font-weight: 300;
`;
