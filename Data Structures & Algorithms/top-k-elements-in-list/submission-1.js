class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const map = new Map();
    // Create an array of empty arrays (the buckets)
    // +1 because if length is 6, we need an index 6 to exist
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    const result = [];

    // 1. Build the frequency map
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // 2. Put numbers into buckets based on their frequency
    for (let [num, freq] of map) {
        buckets[freq].push(num); 
    }

    // 3. Loop backwards through the buckets to get the most frequent items
    for (let i = buckets.length - 1; i >= 0; i--) {
        // If this bucket has numbers in it
        if (buckets[i].length > 0) {
            // Push all numbers from this bucket into our result
            result.push(...buckets[i]); 
        }
        
        // If we found 'k' elements, we are done
        if (result.length === k) {
            return result;
        }
    }
};
}
