import { useEffect, useState } from 'react';
import { requestAPI } from '../Util';

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const getData = async (): Promise<void> => {
            setIsLoading(true);
            try {
                const result = await requestAPI<T>(endpoint, query);

                setData(result);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return {
        data,
        isLoading,
        isError,
    };
};

export default useData;
