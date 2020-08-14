import { reverseArray } from './index'

it ('should return "null" if array !Array', () => {
    const result = reverseArray();
    expect(result).toEqual(null);
});

it ('should get reverse array', () => {
    const result = reverseArray([2, 3, 4, 5, 6]);
    expect(result).toEqual([6, 5, 4, 3, 2]);
});