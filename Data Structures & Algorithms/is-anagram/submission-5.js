class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        
        const map = new Map();

        for(let i = 0; i < s.length; i++){
            map.set(s[i], (map.get(s[i]) || 0 ) + 1)
        }

        for(let i = 0; i < t.length; i++){
            let count = map.get(t[i])

            if(!count) return false
            
            map.set(t[i], count-1)
        }
        return true
    }
}
