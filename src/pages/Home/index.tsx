import React from 'react';
import Header from '../../components/Header';

import s from './Home.module.scss';

export default function HomePage() {
    return (
        <div className={s.root}>
            <Header />
        </div>
    );
}
