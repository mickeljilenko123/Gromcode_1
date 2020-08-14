import { createArrayOfFunctions } from './index'


it ('should return empty arr if argument is undefined', () => {
    const result = createArrayOfFunctions();
    expect(result).toEqual([]);
});

it ('should return "null" if argument is not "number"', () => {
    const result = createArrayOfFunctions('string');
    expect(result).toEqual(null);
});


it ('should return number ', () => {
    const result = createArrayOfFunctions(9)[7]();
    expect(result).toEqual(7);
});
