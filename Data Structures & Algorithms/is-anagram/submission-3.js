class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(!s.length || !t.length || !(s.length === t.length)) return false

        const smap = new Map()
        const tmap = new Map()

        // map the string with char and char count
        for(let i = 0; i< s.length; i++){
            smap.set(s[i], (smap.get(s[i]) || 0) + 1);
        }
        for(let i = 0; i< t.length; i++){
           tmap.set(t[i], (tmap.get(t[i]) || 0) + 1);
        }

        // check of both Map has same char as key and count as value
        for (let [key, val] of smap) {
            console.log(key, val);
            if (!tmap.has(key) || tmap.get(key) !== val) {
                return false;
            }
        }
        return true
    }
}
