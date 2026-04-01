class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = '';    
        const len1 = word1.length;
        const len2 = word2.length;
        const minLen = Math.min(len1, len2);

        for (let i = 0; i < minLen; i++) {
            result += word1[i];
            result += word2[i];
        }
        if (len1 > len2) {
            result += word1.slice(minLen);
        } else if (len2 > len1) {
            result += word2.slice(minLen);
        }
        return result;
    }
}
