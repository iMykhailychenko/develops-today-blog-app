import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StyledMainTag } from './PageTemplate.styled';
import { StyledContainer } from '../Container/Container.styled';

const PageTemplate = ({ children }) => (
    <>
        <Head>
            <title>My blog App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <StyledMainTag>
            <StyledContainer>{children}</StyledContainer>
        </StyledMainTag>

        <Footer />
    </>
);

export default PageTemplate;
