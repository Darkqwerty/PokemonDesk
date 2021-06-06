import React, { useEffect, useState } from 'react';
import { navigate } from 'hookrouter';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Heading';
import Layout from '../../components/Layouts';
import PokemonCard from '../../components/PokemonCard';
import Loader from '../../components/Loader';

import s from './Pokedex.module.scss';
import { IPokemon, IPokemonsData } from '../../Types';
// eslint-disable-next-line import/no-unresolved
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import Pokemon from '../../components/Pokemon';
import Popup from '../../components/Popup';
import { LinkEnum } from '../../routes';
import { getPokemonsTypes, getPokemonsTypesLoading, getPokemonsAction } from '../../store/pokemon';
import { configEndpoint } from '../../config';
import Selector from '../../components/Selector';

interface IQuery {
    limit: number;
    name?: string;
}

interface IPokedexProps {
    /** Идентификатор */
    id?: string | number | undefined;
}

const PokedexPage: React.FC<IPokedexProps> = ({ id }) => {
    const dispatch = useDispatch();
    const types = useSelector(getPokemonsTypes);
    const isTypesLoading = useSelector(getPokemonsTypesLoading);

    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({ limit: 9 });
    const debounceValue = useDebounce(searchValue, 500);

    const { data, isLoading, isError } = useData<IPokemonsData>(configEndpoint.getPokemons, query, [debounceValue]);

    useEffect(() => {
        dispatch(getPokemonsAction(configEndpoint.getPokemonTypes));
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        setQuery((state: IQuery) => ({
            ...state,
            name: event.target.value,
        }));
    };

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <div>Something wrong!</div>;
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
                <div>{isTypesLoading ? <Loader /> : <Selector selOptions={types} />}</div>
                <div className={s.contentGallery}>
                    {!isLoading &&
                        data?.pokemons.map((item: IPokemon) => (
                            <PokemonCard
                                key={item.id}
                                pokemon={item}
                                onClick={() => navigate(`${LinkEnum.POKEDEX}/${item.id}`)}
                            />
                        ))}
                </div>
            </Layout>
            <Popup show={!!id}>
                <Pokemon key={id} id={id} />
            </Popup>
        </>
    );
};

export default PokedexPage;
