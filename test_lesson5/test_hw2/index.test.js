import { increaser } from './index'

it ('should get if num increaser with condition', () => {
    const result = increaser(10, 5);
    expect(result).toEqual(15);
})