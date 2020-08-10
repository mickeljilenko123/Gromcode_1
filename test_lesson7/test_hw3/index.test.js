import { cloneArr } from './index'

it ('should return "null" if array !Array', () => {
    const result = cloneArr();
    expect(result).toEqual(null);
});

it ('should get clone the array', () => {
    const result = cloneArr(['js', 'css', 'html']);
    expect(result).toEqual(['js', 'css', 'html']);
});