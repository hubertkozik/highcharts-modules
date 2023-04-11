class ColorsGenerator {

    #colors = ['red', 'green', 'blue'];
    index = 0;

    constructor() {
    }

    get(n = 1) {
        let startIndex;
        if (n > 1) {
            startIndex = 0;
        } else {
            if (this.index === this.#colors.length) {
                this.index = 0;
            }
            startIndex = this.index;
            this.index++;
        }
        return this.#colors.slice(startIndex, startIndex + n);
    }

    reset() {
        this.index = 0;
    }
}

export default ColorsGenerator;