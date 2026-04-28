class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        const bucket = Array.from({length: nums.length + 1}, ()=>[] )
        const result = []

        for(let num of nums){
            map.set(num, (map.get(num) || 0 ) + 1 );
        }

        for(let [num, freq] of map){
            bucket[freq].push(num);
        }

        console.log(bucket)

        for(let i = bucket.length - 1; i > 0; i-- ){
            if(bucket[i].length > 0){
                result.push(...bucket[i])
            }

            if(result.length >= k){
                return result
            }
        }

    }
}
