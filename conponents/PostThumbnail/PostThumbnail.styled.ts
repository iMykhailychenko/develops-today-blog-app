import styled from 'styled-components';

export const StyledPostList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 70px 20px;
    padding-top: 80px;

    @media (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const StyledPostItem = styled.li`
    position: relative;
`;

export const StyledPostLink = styled.a`
    display: block;
    height: 100%;
    padding: 30px 30px 60px;
    border-radius: 2px;
    color: inherit;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.14);
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: rgb(3, 168, 124);
        color: rgb(255, 255, 255);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

export const StyledPostOptions = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 12px;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: rgb(250, 250, 250);
    }

    ${StyledPostLink}:hover & {
        span {
            background: rgb(255, 255, 255);
        }
    }

    span {
        display: block;
        height: 3px;
        width: 3px;
        background: rgb(0, 0, 0);
    }
`;

export const StyledPostModal = styled.ul`
    position: absolute;
    top: -56px;
    right: 0;
    display: flex;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const StyledPostOptionsBtn = styled.button`
    display: block;
    padding: 14px;
    color: rgb(3, 168, 124);
`;

export const StyledPostTitle = styled.h3`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-bottom: 20px;
    font-weight: 300;
    font-size: 1.4rem;

    ${StyledPostLink}:hover & {
        text-decoration: underline;
    }
`;

export const StyledPostText = styled.p`
    font-size: 1.2rem;
    word-break: break-word;

    @media (min-width: 600px) {
        font-size: 1rem;
    }
`;

export const StyledNoPost = styled.p`
    font-size: 1.2rem;
    text-align: center;

    @media (min-width: 600px) {
        font-size: 1rem;
        text-align: center;
    }
`;
