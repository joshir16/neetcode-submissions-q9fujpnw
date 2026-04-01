class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        const checkAphaNumeric = (char) => /^[a-zA-Z0-9]$/.test(char)

        while(left < right){
            if (!checkAphaNumeric(s[left])) {
                left++
                continue
            }
            if(!checkAphaNumeric(s[right])) {
                right--
                continue
            }
            
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                console.log(s[left], s[right])
                return false
            }

            left++;
            right--;
        }
        return true
    }
}
