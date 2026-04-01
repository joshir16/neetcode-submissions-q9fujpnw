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

        for(let i = 0; i< s.length; i++){
            if(smap.has(s[i])) {
                smap.set(s[i], smap.get(s[i]) + 1)
            }
            else {
                smap.set(s[i], 1)
            }
        }
        for(let i = 0; i< t.length; i++){
            if(tmap.has(t[i])) {
                tmap.set(t[i], tmap.get(t[i]) + 1)
            }
            else {
                tmap.set(t[i], 1)
            }
        }

        for (let [key, val] of smap) {
    if (!tmap.has(key) || tmap.get(key) !== val) {
      return false;
    }
  }
  return true

    }
}
