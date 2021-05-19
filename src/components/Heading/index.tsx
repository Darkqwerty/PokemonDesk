import React from 'react';

import s from './Heading.module.scss';

interface IHeadingProps {
    tag: string;
}

const Heading: React.FC<IHeadingProps> = ({ children, tag }) => {
    return (
        <div className={s.root}>
            <div className={s[tag]}>{children}</div>
        </div>
    );
};

export default Heading;
