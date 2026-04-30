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

            let count = map.get(num)
            if(!res.includes(num) && count > Math.floor(nums.length / 3)){
                res.push(num)
            }
            
        }
        console.log(map)

        return res
    }
}
