class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map()

        for(let i = 0; i < numbers.length; i++){
            const val = target - numbers[i];
            
            if(map.has(val)){
                return [map.get(val) + 1, i + 1]
            }
            map.set(numbers[i], i);
        }

        return []
    }
}
