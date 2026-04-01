class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
     rotate(nums, k) {
        const n = nums.length;

        const temp = [];

        for (let i = 0; i < n; i++) {
            const currentElement = nums[i];

            const indexToBePlaced = (i + k) % n;

            temp[indexToBePlaced] = currentElement;
        }

        for (let i = 0; i < temp.length; i++) {
            nums[i] = temp[i];
        }
    }
}
