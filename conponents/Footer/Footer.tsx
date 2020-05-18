import React from 'react';
import { StyledFooter, StyledWrp, StyledList, StyledLink } from './Footer.styled';
import { StyledContainer } from '../Container/Container.styled';

const Footer: React.FC<{}> = () => (
    <StyledFooter>
        <StyledContainer>
            <StyledWrp>
                <p>Also visit my:</p>

                <StyledList>
                    <li>
                        <StyledLink
                            href="https://ihor-mykhailychenko.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            resume page
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink
                            href="https://github.com/iMykhailychenko?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github
                        </StyledLink>
                    </li>
                </StyledList>
            </StyledWrp>
        </StyledContainer>
    </StyledFooter>
);

export default Footer;
