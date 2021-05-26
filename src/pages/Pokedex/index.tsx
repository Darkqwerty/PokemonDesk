import React, { useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layouts';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import { IPokemon, IPokemonsData } from '../../Types';
import useData from './../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import Pokemon from '../../components/Pokemon';

interface IQuery {
    name?: string;
}

interface IPokedexProps {
    /** Идентификатор */
    id?: string | number;
}

const PokedexPage: React.FC<IPokedexProps> = ({ id }) => {
    const [pokemonData, setPokemonData] = useState({});
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({});
    const debounceValue = useDebounce(searchValue, 500);

    const { data, isLoading, isError } = useData<IPokemonsData>('getPokemons', query, [debounceValue]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        setQuery((state: IQuery) => ({
            ...state,
            name: event.target.value,
        }));
    };

    const handleClickCard = (event: React.SyntheticEvent) => {
        getPokemonById('15');
    };

    const getPokemonById = (id: string | number) => {
        const result = data?.pokemons.filter((item) => item.id === id);
        if (result) {
            setPokemonData(result);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something wrong!</div>;
    }

    if (id) {
        getPokemonById(id);
    }

    return (
        <>
            <Layout className={s.root}>
                <div className={s.contentText}>
                    <Heading size="m">
                        {!isLoading && data?.total} <b>Pokemons</b> for you to choose your favorite
                    </Heading>
                </div>
                <div>
                    <input type="text" value={searchValue} onChange={handleSearchChange} />
                </div>
                <div className={s.contentGallery}>
                    {!isLoading &&
                        data?.pokemons.map((item: IPokemon) => (
                            <PokemonCard key={item.id} pokemon={item} onClick={handleClickCard} />
                        ))}
                </div>
            </Layout>
            <div className={s.popup}>
                <Pokemon key={id} pokemon={pokemonData} />
            </div>
        </>
    );
};

export default PokedexPage;
