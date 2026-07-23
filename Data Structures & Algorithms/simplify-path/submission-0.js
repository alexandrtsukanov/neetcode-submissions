class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        const splitted = path.split('/');

        for (let i = 0; i < splitted.length; i += 1) {
            if (splitted[i] === '.' || splitted[i] === '') {
                continue;
            } else if (splitted[i] === '..') {
                stack.pop();
            } else {
                stack.push(splitted[i]);
            }
        }

        return '/' + stack.join('/');
    }
}
