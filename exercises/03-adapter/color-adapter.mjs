import ColorsGenerator from "./color-generator-2.0.mjs";

const colorsGenerator = new ColorsGenerator();

export default function getNextColor() {
    return colorsGenerator.get()[0];
}

export function reset() {
    colorsGenerator.reset();
}