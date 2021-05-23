import React from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layouts';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import { IPokemon } from '../../pokemon';
import usePokemons from './hooks';

const PokedexPage: React.FC = () => {
    const { data, isLoading, isError } = usePokemons();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something wrong!</div>;
    }

    return (
        <>
            <Layout className={s.root}>
                <div className={s.contentText}>
                    <Heading size="m">
                        {data.total} <b>Pokemons</b> for you to choose your favorite
                    </Heading>
                </div>
                <div className={s.contentGallery}>
                    {data.pokemons.map((item: IPokemon) => (
                        <PokemonCard key={item.id} pokemon={item} />
                    ))}
                </div>
            </Layout>
        </>
    );
};

export default PokedexPage;
