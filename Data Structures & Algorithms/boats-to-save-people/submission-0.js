class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let boats = 0;
        let l = 0;
        let r = people.length - 1;

        while (l <= r) {
            if (people[l] > limit || people[r] > limit) return -1;
            if (people[l] + people[r] <= limit) {
                l += 1;
                r -= 1;
            } else if (people[r] <= limit) {
                r -= 1;
            } else {
                l += 1;
            }
            boats += 1;
        }

        return boats;
    }
}
