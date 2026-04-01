class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxVol = 0;

        while(left < right){
            let minheight = Math.min(heights[left], heights[right]);
            let width = right - left
            let area = minheight * width;

            maxVol = Math.max(maxVol, area);

            if(heights[left] > heights[right]) right--
            else left++
        }
        return maxVol
    }
}
