class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const smap = new Map()

        for(let i=0; i < s.length; i++){
            smap.set(s[i], (smap.get(s[i]) || 0) + 1)
        }

        for(let i = 0 ; i < t.length; i++){
            let count = smap.get(t[i])

            if(!count) return false

            smap.set(t[i], count - 1)
        }


        return true
    }
}
