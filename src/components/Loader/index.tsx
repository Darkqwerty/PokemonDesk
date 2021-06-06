import React from 'react';
import s from './Loader.module.scss';
import { ReactComponent as Pokeball } from './assets/Pokeball2.svg';

const Loader = () => {
    return (
        <div className={s.root}>
            <Pokeball className={s.rotate} />
        </div>
    );
};

export default React.memo(Loader);
