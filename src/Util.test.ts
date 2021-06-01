import { toCapitalizeFirstLetter } from './Util';

describe('toCapitalize', () => {
    test('Должен принимать строку со всеми строчными буквами и возвращать строку с заглавной первой буквой', () => {
        expect(toCapitalizeFirstLetter('pikachu')).toEqual('Pikachu');
    });

    test('Должен принимать строку со случайной заглавной буквой и возвращать строку с заглавной первой буквой', () => {
        expect(toCapitalizeFirstLetter('pikaChu')).toEqual('Pikachu');
    });

    test('Должен принимать строку со всеми заглавными буквами и возвращать строку с заглавной первой буквой', () => {
        expect(toCapitalizeFirstLetter('PIKACHU')).toEqual('Pikachu');
    });

    test('Должен принимать строку со случайными строчными и заглавными буквами и возвращать строку с заглавной первой буквой', () => {
        expect(toCapitalizeFirstLetter('PiKaCHu')).toEqual('Pikachu');
    });

    test('Должен принимать строку с несколькими словами со случайными строчными и заглавными буквами и возвращать строку с заглавной первой буквой', () => {
        expect(toCapitalizeFirstLetter('PiKaCHu the Best')).toEqual('Pikachu the best');
    });
});
