import Url from 'url';
import { config } from './config';

export function toCapitalize(str: string | undefined): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getUrlWithParamsConfig(endpointConfig: string, query = {}): object {
    return {
        ...config.client.server,
        ...config.client.endpoint[endpointConfig].uri,
        query,
    };
}

export async function requestAPI<T>(endpoint: string, query = {}, options = {}): Promise<T> {
    const uri = Url.format(getUrlWithParamsConfig(endpoint, query), options);
    const result = await fetch(uri).then((res) => res.json());

    return result;
}

export default toCapitalize;
