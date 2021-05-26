import Url from 'url';
import { config } from './config';

export function toCapitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getUrlWithParamsConfig(endpointConfig: string, options = {}): object {
    return {
        ...config.client.server,
        ...config.client.endpoint[endpointConfig].uri,
        query: options,
    };
}

export async function requestAPI<T>(endpoint: string, options = {}): Promise<T> {
    const uri = Url.format(getUrlWithParamsConfig(endpoint, options));
    const result = await fetch(uri).then((res) => res.json());

    return result;
}

export default toCapitalize;
