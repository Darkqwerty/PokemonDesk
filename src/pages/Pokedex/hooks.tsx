import { useEffect, useState } from 'react';
import { requestAPI } from '../../Util';

const usePokemons = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getPokemons = async () => {
            setIsLoading(true);
            try {
                // const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
                const result = await requestAPI('getPokemons');

                setData(result);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getPokemons();
    }, []);

    return {
        data,
        isLoading,
        isError,
    };
};

export default usePokemons;
