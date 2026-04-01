class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const map = new Map();
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    const result = [];

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, freq] of map) {
        buckets[freq].push(num); 
    }

    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]); 
        }
        
        if (result.length === k) {
            return result;
        }
    }
};
}
