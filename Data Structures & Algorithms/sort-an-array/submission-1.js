class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        for (let i = 1; i < nums.length; i++) {
            let currentVal = nums[i]; 
        
            let j = i - 1;

            while (j >= 0 && nums[j] > currentVal) {
                nums[j + 1] = nums[j]; 
                j--;                   
            }
            nums[j + 1] = currentVal;
        }

        return nums;
    }
}
