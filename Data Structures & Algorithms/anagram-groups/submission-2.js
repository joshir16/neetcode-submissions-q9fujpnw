class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (!strs.length) return [];

        const map = new Map();

        for (let str of strs) {
            // Create an array of 26 zeros to represent 'a' through 'z'
            const count = new Array(26).fill(0);

            // Tally the frequency of each character in the string
            for (let char of str) {
                // charCodeAt(0) - 97 maps 'a' to 0, 'b' to 1, etc.
                count[char.charCodeAt(0) - 97]++;
            }

            // Convert the array into a comma-separated string to use as a Map key
            // Example: "1,0,0,0,1..."
            const key = count.join(',');

            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}
