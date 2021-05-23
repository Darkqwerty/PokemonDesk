import React from 'react';

import s from './Button.module.scss';

interface IButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
    return (
        <button className={s.root} type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
