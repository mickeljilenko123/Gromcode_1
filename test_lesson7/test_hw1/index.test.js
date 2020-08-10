import { squareArray } from './index'

it ('should return "null" if array !Array', () => {
    const result = squareArray();
    expect(result).toEqual(null);
});

it ('should get square numbers from array', () => {
    const result = squareArray([2, 3, 4, 5, 6]);
    expect(result).toEqual([4, 9, 16, 25, 36]);
});