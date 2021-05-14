// Task 1 <Работа с простыми типами>
const concat = (a: string, b: string): string => {
    return `${a}${b}`;
};

concat('Hello ', 'World'); // -> Hello World;
// test
// console.log(concat('Hello ', 'World'));

// Task 2 <Работа с интерфейсами>
interface IMyHomeTask {
    howIDoIt: string;
    simeArray: (string | number)[];
    withData?: IMyHomeTask[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myHometask: IMyHomeTask = {
    howIDoIt: 'I Do It Wel',
    simeArray: ['string one', 'string two', 42],
    withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// Task 3 <Типизация функций, используя Generic>
interface IMyArray<T> {
    [n: number]: T;
    map<U>(fn: (el: T) => U): U[];
    reduce<TRes>(fn: (prev: TRes, curr: T) => TRes, init: TRes): TRes;
}

const tsArr: IMyArray<number> = [1, 2, 3, 4];

tsArr.map((i: number) => i + 1);
tsArr.map((i: number) => `${i} + 1`);

tsArr.reduce((i, k) => i + k, 0);
tsArr.reduce((i, k) => `${i} + ${k} + 1`, '');
