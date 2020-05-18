import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;

    @media (min-width: 768px) {
        padding-top: 120px;
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
