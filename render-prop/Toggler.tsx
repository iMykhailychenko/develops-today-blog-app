import React, { useState, ReactElement } from 'react';

interface Props {
    children(params: { isOpen: boolean; onToggle(isOpen: boolean): void }): ReactElement;
}

const Toggler: React.FC<Props> = ({ children }) => {
    const [isOpen, setToggle] = useState(false);

    return children({
        isOpen: isOpen,
        onToggle: setToggle,
    });
};

export default Toggler;
