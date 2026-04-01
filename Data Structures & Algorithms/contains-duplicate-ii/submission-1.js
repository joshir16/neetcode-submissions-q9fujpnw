class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map = new Map()
        for(let i = 0; i < nums.length; i++){
            const j = map.get(nums[i]);
            if(Math.abs(i - j) <= k ) return true

            map.set(nums[i], i);
        }
        return false
    }
}
