import React from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Layout from '../../components/Layouts';
import PokemonCard from '../../components/PokemonCard';
import Pokemons from '../../pokemon';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
    return (
        <div className={s.root}>
            <Header />
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <Heading size="xl">
                        800 <b>Pokemons</b> for you to choose your favorite
                    </Heading>
                </div>
                <div className={s.contentGallery}>
                    {Pokemons.map((item) => (
                        <PokemonCard pokemon={item} />
                    ))}
                </div>
            </Layout>
        </div>
    );
};

export default PokedexPage;
