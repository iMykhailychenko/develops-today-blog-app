import React from 'react';
import { StyledWrp, StyledTitle, StyledText } from './MainTitle.styled';

const MainTitle: React.FC<{}> = () => (
    <StyledWrp>
        <StyledTitle>Hello! &#9995; This is my blog</StyledTitle>
        <StyledText>Expand your reading. Expand your mind.</StyledText>
    </StyledWrp>
);

export default MainTitle;
