class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            let min = i

            for (let j = i; j < nums.length; j++){
                if(nums[j] < nums[min]){
                    min = j
                }
            }

            if(min != i){
                [nums[i], nums[min]] = [nums[min], nums[i]]    
            }
        }

        return nums;
    }
}
