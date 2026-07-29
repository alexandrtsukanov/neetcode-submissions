class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
        let readIndex = 0;
        let writeIndex = 0;

        while (readIndex < chars.length) {
            const char = chars[readIndex];
            let count = 0;

            while (chars[readIndex] === char && readIndex < chars.length) {
                readIndex += 1;
                count += 1;
            }

            chars[writeIndex] = char;
            
            if (count > 1) {
                const len = count.toString().length;
                writeIndex += len;

                while (count > 0) {
                    chars[writeIndex] = (count % 10).toString();
                    count = Math.floor(count / 10);
                    writeIndex -= 1;
                }
        
                writeIndex += len;
            }
            writeIndex += 1;
        }

        chars.length = writeIndex;

        return chars.length;
    }
}
