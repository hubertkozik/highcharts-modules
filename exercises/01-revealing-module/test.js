import getNextColor from './color-generator.mjs';
import { reset } from './color-generator.mjs';

function expect(value) {
    return {
        toBe: (expected) => value === expected
    }
};

console.log(
    expect(getNextColor()).toBe('red') // should be true in console
);

console.log(
    expect(getNextColor()).toBe('green') // should be true in console
);

console.log(
    expect(getNextColor()).toBe('blue') // should be true in console
);

reset();

console.log(
    expect(getNextColor()).toBe('red') // should be true in console
);
