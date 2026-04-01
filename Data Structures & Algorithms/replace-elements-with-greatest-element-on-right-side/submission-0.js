class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1;
        let temp;

        for(let i = arr.length - 1; i >= 0; i--){
           if(max === -1){
            max = arr[i];
            arr[i] = -1
            continue
           }

           if(max < arr[i]) {
            [arr[i] , max] = [max, arr[i]]
           } else {
            arr[i] = max
           }
        }

        return arr
    }
}
