const colors = ['red', 'green', 'blue'];

let i = 0;

export default function getNextColor() {
    if (i === colors.length) {
        i = 0;
    }
    return colors[i++];
}

export function reset() {
    i = 0;
}
