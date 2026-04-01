class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if(s.length > t.length) return false;
        let ps = 0;
        let pt = 0;

        while(ps < s.length && pt < t.length){
            if(s[ps] === t[pt]) {
                ps++
            } 
            pt++
        }

        return s.length == ps 
    }
}
