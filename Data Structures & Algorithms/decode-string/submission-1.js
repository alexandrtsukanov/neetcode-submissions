class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stackQuantities = [];
        const stackStrings = [];
        let multiplier = 0;
        let current = '';

        for (let i = 0; i < s.length; i += 1) {
            if (!isNaN(s[i])) {
                let num = '';
                while (!isNaN(s[i])) {
                    num += s[i];
                    i += 1;
                }
                multiplier = Number(num);
                i -= 1;
            } else if (s[i] === '[') {
                stackQuantities.push(multiplier);
                stackStrings.push(current);
                multiplier = 0;
                current = [];
            } else if (s[i] === ']') {
                const num = stackQuantities.pop();
                const str = stackStrings.pop();
                const temp = current;
                for (let j = 1; j <= num - 1; j += 1) {
                    current += temp;
                }
                current = str + current;
            } else {
                current += s[i];
            }
        }

        return current;
    }
}