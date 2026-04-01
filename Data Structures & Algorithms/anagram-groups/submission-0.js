class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(!strs.length) return [];

        const map = new Map();

        for(let str of strs){
            let val = str.split("").sort().join("")

            if(!map.has(val)){
                map.set(val, [])
            }
            map.get(val).push(str)
        }
        return Array.from(map.values())
    }
}
