class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const hashSet = new Set();

        for (let i = 0; i < emails.length; i += 1) {
            hashSet.add(this.processEmail(emails[i]));
        }

        return hashSet.size;
    }
    processEmail(email) {
        const resultArr = [];
        let isDomain = false;
        let isPlus = false;

        for (let i = 0; i < email.length; i += 1) {
            if (email[i] === '@') {
                isDomain = true;
            }
            if (isDomain) {
                resultArr.push(email[i]);
                continue;
            }
            if (email[i] === '+') {
                isPlus = true;
            }
            if (email[i] === '.' || isPlus) {
                continue;
            }
            resultArr.push(email[i]);
        }

        return resultArr.join('');
    }
}
