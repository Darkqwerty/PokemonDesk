import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

import Layout from '../../components/Layouts';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

export default function HomePage() {
    return (
        <>
            <Layout className={s.root}>
                <div className={s.contentWrap}>
                    <div className={s.contentText}>
                        <Heading size="xl">
                            <b>Find</b> all your favorite <b>Pokemon</b>
                        </Heading>
                        <Heading size="m">
                            <span>You can know the type of Pokemon, its strengths, disadvantages and abilities</span>
                        </Heading>
                        <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemon</Button>
                    </div>
                    <div className={s.contentParallax}>
                        <Parallax />
                    </div>
                </div>
            </Layout>
        </>
    );
}
