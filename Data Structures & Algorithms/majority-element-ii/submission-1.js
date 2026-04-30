class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = new Map()
        const res = []

        for(let num of nums){
            map.set(num, (map.get(num) || 0 ) + 1)            
        }

        for(let [key, value] of map){
            console.log(value)

            if(value > Math.floor(nums.length / 3)){
                res.push(key)
            }
        }

        return res
    }
}
