import { toCapitalize } from './Util';

describe('toCapitalize', () => {
    test('Должен возвращать строку с заглавной первой буквой', () => {
        expect(toCapitalize('pikachu')).toEqual('Pikachu');
        expect(toCapitalize('pikaChu')).toEqual('Pikachu');
        expect(toCapitalize('PIKACHU')).toEqual('Pikachu');
        expect(toCapitalize('PiKaCHu')).toEqual('Pikachu');
    });
});
