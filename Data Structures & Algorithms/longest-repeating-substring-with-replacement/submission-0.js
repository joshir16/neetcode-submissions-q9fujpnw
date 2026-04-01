class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
    let maxFreq = 0; // Tracks the count of the most popular character in the window
    let maxLength = 0;
    const charCounts = {}; // Your frequency map!

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        // 1. Add the current character to our map
        charCounts[char] = (charCounts[char] || 0) + 1;
        
        // 2. Update the highest frequency we've seen in the window
        maxFreq = Math.max(maxFreq, charCounts[char]);

        // 3. The Math: Is the window currently invalid?
        const windowLength = right - left + 1;
        if (windowLength - maxFreq > k) {
            
            // The window is invalid. We must shrink it from the left.
            const leftChar = s[left];
            charCounts[leftChar]--; // Remove the left character from our map
            left++;                 // Shrink the window
        }

        // 4. Update our longest valid window record
        // (If the window was invalid above, we shrunk it by 1, so the length remains 
        // the same as the previous valid state, which is perfectly fine!)
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
    }
}
