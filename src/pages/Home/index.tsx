import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';
import Header from '../../components/Header';

import Layout from '../../components/Layouts';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

export default function HomePage() {
    return (
        <div className={s.root}>
            <Header />
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <Heading tag="h1">
                        <b>Find</b> all your favorite <b>Pokemon</b>
                    </Heading>
                    <Heading tag="h3">
                        <span>You can know the type of Pokemon, its strengths, disadvantages and abilities</span>
                    </Heading>
                    <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemon</Button>
                </div>
                <div className={s.contentParallax}>
                    <Parallax />
                </div>
            </Layout>
        </div>
    );
}
