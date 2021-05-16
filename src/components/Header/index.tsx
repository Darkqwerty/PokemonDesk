import React from 'react';

import s from './Header.module.scss';

const Header = () => {
    return (
        <div className={s.root}>
            <div className={s.wrap}>
                <div className={s.pokemonLogo} />
            </div>
            <div className={s.menuWrap}>
                <a className={s.menuLink} href="#">
                    Home
                </a>
            </div>
        </div>
    );
};

export default Header;
