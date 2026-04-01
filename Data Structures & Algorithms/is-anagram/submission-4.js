class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        // create single Map, and update the count value for each char. 
        // if the count of each char is 0 then it means both string has equal chars
        const map = new Map()

        // Map the string s with value as the char count
        for(let i = 0; i< s.length; i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }


        // check if the 2nd string chars are present in the Map with value
        for(let i = 0; i< t.length; i++){
            let count = map.get(t[i])
            
            // if value Count is not present, then return false
            if(!count) return false

            // otherwise char count -- 
            map.set(t[i], count - 1);
        }

        return true
    }
}
