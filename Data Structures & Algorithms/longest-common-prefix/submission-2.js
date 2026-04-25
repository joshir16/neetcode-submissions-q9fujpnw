class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(!strs.length) return ""

        let res = "";
        const sortedStrs = strs.sort()

        for(let i = 0; i< sortedStrs[0].length; i++){
            if(sortedStrs[0][i] === sortedStrs[sortedStrs.length-1][i]){
                res = res + sortedStrs[0][i]
            } else {
                return res
            }
        }

        return res
    }
}
