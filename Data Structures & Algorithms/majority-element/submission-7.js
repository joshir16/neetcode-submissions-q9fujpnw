class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0 ) + 1)

            let count = map.get(nums[i])
            if( count > Math.floor(nums.length / 2)){
                return nums[i]
            }
            

        }
    }
}
