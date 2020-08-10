import { getSum } from './index'

it ('should get sum all numbers', () => {
    const result = getSum(3, 10);
    expect(result).toEqual(28);
});