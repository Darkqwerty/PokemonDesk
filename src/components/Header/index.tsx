import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import { GENERAL_MENU } from '../../routes';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSVG } from './assets/Logo.svg';

const Header = () => {
    const path = usePath();
    return (
        <div className={s.root}>
            <div className={s.wrap}>
                <div className={s.pokemonLogo}>
                    <PokemonLogoSVG />
                </div>
            </div>
            <div className={s.menuWrap}>
                {GENERAL_MENU.map(({ title, link }) => (
                    <A
                        key={title}
                        href={link}
                        className={cn(s.menuLink, {
                            [s.activeLink]: link === path,
                        })}>
                        {title}
                    </A>
                ))}
            </div>
        </div>
    );
};

export default React.memo(Header);
