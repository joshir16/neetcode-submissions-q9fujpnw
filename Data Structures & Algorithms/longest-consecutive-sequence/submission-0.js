class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        nums = nums.sort((a,b) => a - b );

        let maxLen = 1;
        let currentLen = 1;

        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] + 1 === nums[i+1]){
                currentLen++;
            } else if (nums[i] !== nums[i+1]) {
                currentLen = 1;
            }
            maxLen = Math.max(maxLen, currentLen);
        }

        return maxLen;
    }
}