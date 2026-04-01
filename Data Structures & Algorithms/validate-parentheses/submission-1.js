class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length <= 0) return true
        const map = {
            "(": ")",
            "[": "]",
            "{": "}",
        }
        let result = [];

        for(let char of s){
            if(map[char]){
                result.push(map[char])
            } else {
                if(result.pop() !== char){
                    return false
                }
            }
        }
        return result.length ? false : true
    }
}
