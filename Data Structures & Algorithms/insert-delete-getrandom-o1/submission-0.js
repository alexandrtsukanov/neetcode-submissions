class RandomizedSet {
    constructor() {
        this.array = [];
        this.map = new Map();
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.map.has(val)) {
            return false;
        }

        this.array.push(val);
        this.map.set(val, this.array.length - 1);

        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.map.has(val)) {
            return false;
        }

        const index = this.map.get(val);
        this.array[index] = this.array[this.array.length - 1];
        this.map.set(this.array[index], index);
        this.array.pop();
        this.map.delete(val);

        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.array.length);

        return this.array[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
