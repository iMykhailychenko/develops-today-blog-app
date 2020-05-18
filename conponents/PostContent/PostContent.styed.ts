import styled from 'styled-components';

export const StyledText = styled.p`
    text-align: center;
    font-size: 1.5rem;

    @media (min-width: 768px) {
        margin-bottom: 140px;
        text-align: left;
    }
`;

export const StyledCommentsTitle = styled.h4`
    padding: 50px 0 10px;
    text-align: center;
    font-size: 1.8rem;
    color: rgb(3, 168, 124);

    @media (min-width: 768px) {
        text-align: left;
    }
`;

export const StyledCommentsItem = styled.li`
    padding: 20px 0;
    font-size: 1rem;
    border-bottom: 1px solid rgb(200, 200, 200);
`;

export const StyledTextarea = styled.textarea`
    display: block;
    width: 100%;
    margin-top: 60px;
    padding: 15px;
    border: none;
    background-color: rgb(250, 250, 250);
    border-bottom: 1px solid rgb(130, 130, 130);
    font-size: 1.2rem;

    @media (min-width: 768px) {
        margin-top: 100px;
    }
`;

export const StyledSubmit = styled.button`
    display: block;
    margin-top: 20px;
    padding: 10px 30px;
    background-color: rgb(3, 168, 124);
    border: none;
    border-radius: 8px;
    color: rgb(255, 255, 255);
    font-size: 1.1rem;
    font-weight: 300;
`;
