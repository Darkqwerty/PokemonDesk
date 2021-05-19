import React from 'react';

import cn from 'classnames';
import s from './Heading.module.scss';

interface IHeadingProps {
    size: string;
    className?: string;
}

const Heading: React.FC<IHeadingProps> = ({ children, size, className = null }) => {
    return (
        <div className={cn(s.root, className)}>
            <div className={s[size]}>{children}</div>
        </div>
    );
};

export default Heading;
