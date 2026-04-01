class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];

        for(let i = 0; i < nums.length; i++){
            let val = 1;
            for(let j = 0; j < nums.length; j++ ){
                if(i != j) {
                    val = val * nums[j];
                }
            }
            result.push(val)
        }

        console.log(result)

        return result
    }
}
