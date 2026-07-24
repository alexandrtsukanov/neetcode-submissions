class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        const stack = [];
        
        for (let i = 0; i < s.length; i += 1) {
            if (!stack.length) {
                stack.push([s[i], 1]);
                continue;
            }

            if (!stack.length || stack[stack.length - 1][0] !== s[i]) {
                stack.push([s[i], 1]);
            } else {
                stack[stack.length - 1][1] += 1;
            }

            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        }

        return stack.map(el => {
            const count = el[1];
            let str = [];
            for (let i = 1; i <= count; i += 1) {
                str.push(el[0]);
            }
            return str.join('');
        }).join('');
    }
}
