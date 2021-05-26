import React from 'react'
import { IPokemon } from '../../Types';

export interface IPokemonProps {
    /** Идентификатор */
    id: string | number;
    /** Данные о покемоне */
    pokemon: IPokemon
}

const Pokemon: React.FC<IPokemonProps> = ({id, pokemon}) => {
    return (
        <div key={id}>
            this is pokemon {pokemon.name_clean}
        </div>
    )
}

export default Pokemon
