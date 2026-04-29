class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = ""
        const minLen = Math.min(word1.length, word2.length)

        for(let i =0; i < minLen; i++){
            res += word1[i]
            res += word2[i]
        }

        if(word1.length > word2.length){
            res += word1.slice(minLen)
        } else if(word2.length > word1.length){
            res += word2.slice(minLen)
        }

        return res
        
    }
}
