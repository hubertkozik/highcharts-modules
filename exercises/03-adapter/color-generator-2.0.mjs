class ColorsGenerator {

    colors = ['red', 'green', 'blue'];
    i = 0;

    constructor() {
    }

    get(n) {
        if (n > 1) {
            return this.colors.slice(0, n);
        } else {
            if (this.i === this.colors.length) {
                this.i = 0;
            }
            return [this.colors[this.i++]];
        }
    }

    reset() {
        this.i = 0;
    }
}

export default ColorsGenerator;