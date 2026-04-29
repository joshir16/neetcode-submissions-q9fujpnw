class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str, left, right){
        console.log(str);
        while(left < right){
            if(str[left] !== str[right]){
                return false
            }
            left++
            right--
        }
        return true
    }

    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while(left < right){
            if(s[left] === s[right]){
                left++
                right--
            } else{
                return this.isPalindrome(s, left+1, right) || this.isPalindrome(s, left, right-1)
            }
        }
        return true
    }
}
