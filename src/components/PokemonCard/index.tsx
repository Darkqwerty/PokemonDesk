import React from 'react';
import cn from 'classnames';
import { IPokemon } from '../../Types';
import { toCapitalizeFirstLetter } from '../../Util';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCard {
    pokemon: IPokemon;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PokemonCard: React.FC<IPokemonCard> = ({ pokemon, onClick }) => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading size="xs" className={s.titleName}>
                    {toCapitalizeFirstLetter(pokemon.name_clean)}
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{pokemon.stats.attack}</div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{pokemon.stats.defense}</div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {pokemon.types.map((type) => (
                        <span key={type} className={cn(s[type], s.label)}>
                            {type}
                        </span>
                    ))}
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src={pokemon.img} alt={pokemon.name} />
            </div>
        </div>
    );
};

export default PokemonCard;
