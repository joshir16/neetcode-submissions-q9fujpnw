class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(!strs.length) return ""

        strs.sort();
        let res = ""

        for(let i = 0; i < strs[0].length; i++){
            if(strs[0][i] === strs[strs.length -1][i]){
                res = res + strs[0][i]
            } else return res
        }
        return res
    }
}
