class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
   search (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // 1. The <= ensures we still check if the array shrinks to a single number
    while (left <= right) {
        
        // 2. Math.floor prevents decimal indices, (left + right) / 2 finds the exact average
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Found it!
        } 
        else if (nums[mid] < target) {
            // Target is larger, so it must be on the right side.
            // 3. We already checked 'mid', so we start the new left boundary at mid + 1
            left = mid + 1;
        } 
        else {
            // Target is smaller, so it must be on the left side.
            // 4. We already checked 'mid', so we end the new right boundary at mid - 1
            right = mid - 1;
        }
    }

    // If the loop finishes and we haven't returned, the number doesn't exist.
    return -1;
    };
}
