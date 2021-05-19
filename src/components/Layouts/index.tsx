import React from 'react';
import cn from 'classnames';

import s from './Layouts.module.scss';

interface ILayoutProps {
    className: string | null;
}

const Layout: React.FC<ILayoutProps> = ({ children, className = null }) => (
    <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;
