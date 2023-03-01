const colors = ['red', 'green', 'blue'];

let i = 0;

export default function getNextColor() {
    if (i === 3) {
        i = 0;
    }
    return colors[i++];
}

export function reset() {
    i = 0;
}
