class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        if(pattern.length !== s.split(" ").length) return false

        const map = new Map();
        const set = new Set();
        s= s.split(" ")


        for(let i= 0; i < pattern.length; i++){
            if(map.has(pattern[i])){
                let val = map.get(pattern[i])
                if(val !== s[i]) return false
            } else {
                if(set.has(s[i])) return false

                map.set(pattern[i], s[i])
                set.add(s[i])
            }

        }

        return true
    }
}
