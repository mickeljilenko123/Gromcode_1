import { sum } from './index'

it ('should return "null" if array !Array', () => {
    const result = sum();
    expect(result).toEqual(null);
});

it ('should return all summa from array', () => {
    const result = sum([5, 10, 20, 50]);
    expect(result).toEqual(85);
});