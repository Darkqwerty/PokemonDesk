import Url from 'url';
import { config } from './config';
import { IPokemon } from './pokemon';

export function toCapitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getUrlWithParamsConfig(endpointConfig: string): object {
    return {
        ...config.client.server,
        ...config.client.endpoint[endpointConfig].uri,
    };
}

export async function requestAPI(endpoint: string): Promise<IPokemon[]> {
    const uri = Url.format(getUrlWithParamsConfig(endpoint));
    const result = await fetch(uri).then((res) => res.json());

    return result;
}

export default toCapitalize;
