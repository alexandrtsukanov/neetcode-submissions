class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    calculate(s) {
        const newStr = s.split('').filter(char => char !== ' ').join('');
        if (isNaN(newStr[0])) return null;

        const stack = [];
        let currentNum = 0;
        let lastSign;

        for (let i = 0; i < newStr.length; i += 1) {
            if (!isNaN(newStr[i])) {
                currentNum = currentNum * 10 + Number(newStr[i]);
                if (isNaN(newStr[i + 1])) {
                    if (lastSign === '+' || !lastSign) {
                        stack.push(currentNum);
                    }
                    if (lastSign === '-') {
                        stack.push(-currentNum);
                    }
                    if (lastSign === '*') {
                        stack.push(currentNum * stack.pop());
                    }
                    if (lastSign === '/') {
                        stack.push(Math.trunc(stack.pop() / currentNum));
                    }
                }
            } else {
                lastSign = newStr[i];
                currentNum = 0;
            }
        }

        return stack.reduce((acc, num) => acc + num, 0);
    }
}
