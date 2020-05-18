import styled from 'styled-components';

export const StyledTitleInput = styled.input`
    display: block;
    width: 100%;
    padding: 15px;
    border: none;
    background-color: rgb(250, 250, 250);
    border-bottom: 1px solid rgb(130, 130, 130);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 2rem;
    font-weight: 700;
`;

export const StyledTextarea = styled.textarea`
    display: block;
    width: 100%;
    margin-top: 20px;
    padding: 15px;
    border: none;
    background-color: rgb(250, 250, 250);
    border-bottom: 1px solid rgb(130, 130, 130);
    font-size: 1.2rem;

    @media (min-width: 768px) {
        margin-top: 60px;
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

    @media (min-width: 768px) {
        margin-top: 60px;
    }
`;
