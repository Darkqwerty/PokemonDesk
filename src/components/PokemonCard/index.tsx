import React from 'react';
import cn from 'classnames';
import { IPokemon } from '../../pokemon';
import { toCapitalize } from '../../Util';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCard {
    pokemon: IPokemon;
}

const PokemonCard: React.FC<IPokemonCard> = ({ pokemon }) => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading size="xs" className={s.titleName}>
                    {toCapitalize(pokemon.name_clean)}
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
                        <span key={type} className={cn(s.label, s[type])}>
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
