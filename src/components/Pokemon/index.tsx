import React from 'react';
import cn from 'classnames';
import useData from '../../hooks/getData';
import { IPokemon } from '../../Types';
import toCapitalizeFirstLetter from '../../Util';

import s from './Pokemon.module.scss';
import spc from '../PokemonCard/PokemonCard.module.scss';

export interface IPokemonProps {
    /** Идентификатор */
    id: string | number | undefined;
}

const Pokemon: React.FC<IPokemonProps> = ({ id }) => {
    const { data, isLoading, isError } = useData<IPokemon>('getPokemon', { id }, []);
    const pokemon = data;

    if (!id) {
        return <div />;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something wrong!</div>;
    }

    return (
        <div className={s.root} key={id}>
            <div className={s.img}>
                <img src={pokemon?.img} alt={pokemon?.name} />
                <div className={cn(spc.labelWrap, s.labelWrap)}>
                    {pokemon?.types.map((type) => (
                        <span key={type} className={cn(spc.label)}>
                            {/* <span key={type} className={cn(spc[type], spc.label)}> */}
                            {type}
                        </span>
                    ))}
                </div>
            </div>
            <div className={s.info}>
                <div className={s.name}>{toCapitalizeFirstLetter(pokemon?.name_clean)}</div>
                <div className={s.abilities}>
                    <div className={s.caption}>Abilities</div>
                    {pokemon?.abilities}
                </div>
                <div className={s.abilities}>
                    Healthy Points
                    {pokemon?.stats.hp}
                    Experience
                    {pokemon?.base_experience}
                </div>
                <div className={s.stats}>
                    <div className={spc.statWrap}>
                        <div className={spc.statItem}>
                            <div className={spc.statValue}>{pokemon?.stats.attack}</div>
                            Attack
                        </div>
                        <div className={spc.statItem}>
                            <div className={spc.statValue}>{pokemon?.stats.defense}</div>
                            Defense
                        </div>
                        <div className={spc.statItem}>
                            <div className={spc.statValue}>{pokemon?.stats['special-attack']}</div>
                            Sp Attack
                        </div>
                        <div className={spc.statItem}>
                            <div className={spc.statValue}>{pokemon?.stats['special-defense']}</div>
                            Sp Defense
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
