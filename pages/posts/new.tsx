import React from 'react';

// components
import PageTemplate from '../../conponents/PageTemplate/PageTemplate';
import NewPostForm from '../../conponents/NewPostForm/NewPostForm';
import { StyledPageTitle } from '../../conponents/PageTitle/PageTitle.styled';

const New: React.FC<{}> = () => {
    return (
        <PageTemplate>
            <StyledPageTitle>Сreate a new post</StyledPageTitle>
            <NewPostForm  />
        </PageTemplate>
    );
};

export default New;
