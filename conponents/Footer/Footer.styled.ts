import styled from 'styled-components';

export const StyledFooter = styled.footer`
    padding: 20px 0;
    background-color: rgb(240, 240, 240);
    font-size: 1.4rem;

    @media (min-width: 768px) {
        padding: 60px 0;
        font-size: 1rem;
    }
`;

export const StyledWrp = styled.div`
    display: flex;
`;

export const StyledList = styled.ul`
    display: flex;
`;

export const StyledLink = styled.a`
    padding-left: 16px;
    color: rgb(3, 168, 124);
`;