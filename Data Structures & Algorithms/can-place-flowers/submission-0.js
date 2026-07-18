class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let total = n;
        let start = 0;
        let end = flowerbed.length - 1;
        let zeroesInStart = 0;
        let zeroesInEnd = 0;

        while (flowerbed[end] === 0 && end >= 0) {
            zeroesInEnd += 1;
            end -= 1;
        }

        if (zeroesInEnd === flowerbed.length) {
            return Math.ceil(flowerbed.length / 2) >= n;
        }

        total -= Math.floor((zeroesInEnd) / 2);

        while (flowerbed[start] === 0 && start < flowerbed.length) {
            zeroesInStart += 1;
            start += 1;
        }

        total -= Math.floor((zeroesInStart) / 2);

        if (total <= 0) return true;

        let currentZeroes = 0;

        for (let i = start; i <= end; i += 1) {
            if (flowerbed[i] === 0) {
                currentZeroes += 1;
            } else {
                if (currentZeroes >= 3) {
                    const ableToPlant = Math.floor((currentZeroes - 1) / 2);
                    total -= ableToPlant;
                    if (total <= 0) return true;
                }
                currentZeroes = 0;
            }
        }

        return total <= 0;
    }
}
