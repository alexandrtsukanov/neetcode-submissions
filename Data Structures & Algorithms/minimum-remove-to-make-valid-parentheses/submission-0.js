class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s) {
        const indicesOpenBrackets = [];
        const indicesClosingBrackets = [];

        for (let i = 0; i < s.length; i += 1) {
            if (s[i] !== '(' && s[i] !== ')') {
                continue;
            }
            if (s[i] === '(') {
                indicesOpenBrackets.push(i);
            } else {
                if (indicesOpenBrackets.length === 0) {
                    indicesClosingBrackets.push(i);
                } else {
                    indicesOpenBrackets.pop();
                }
            }
        }

        const result = [];
        let posOpenBrackets = 0;
        let posClosingBrackets = 0;

        for (let i = 0; i < s.length; i += 1) {
            if (indicesOpenBrackets[posOpenBrackets] !== i && indicesClosingBrackets[posClosingBrackets] !== i) {
                result.push(s[i]);
            } else {
                if (indicesOpenBrackets[posOpenBrackets] === i) {
                    posOpenBrackets += 1;
                }
                if (indicesClosingBrackets[posClosingBrackets] === i) {
                    posClosingBrackets += 1;
                }
            }
        }

        return result.join('');
    }
}
