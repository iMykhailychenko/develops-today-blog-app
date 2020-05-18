import styled from 'styled-components';

export const StyledLoaderWrp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
`;

export const StyledLoaderSuccess = styled.p`
    font-weight: 700;
    font-size: 2rem;
    color: rgb(3, 168, 124);
`;
