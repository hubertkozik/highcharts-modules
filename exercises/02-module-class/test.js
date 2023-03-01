import ColorsGenerator from "./color-generator-2.0.mjs";

const colorsGenerator = new ColorsGenerator();

function expect(value) {
    return {
        toBe: (expected) => value === expected
    }
};

console.log(colorsGenerator.get());
console.log(colorsGenerator.get());
console.log(colorsGenerator.get());
console.log(colorsGenerator.get());
console.log(colorsGenerator.get(2));
console.log(colorsGenerator.get());
colorsGenerator.reset();
console.log(colorsGenerator.get(1));
console.log(colorsGenerator.get(1));
console.log(colorsGenerator.get(123123123));

colorsGenerator.reset();

console.log(
    expect(colorsGenerator.get().length)
        .toBe(1) // should be true in console
);

console.log(
    expect(colorsGenerator.get()[0])
        .toBe('green') // should be true in console
);