class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for (let str of strs) {
            encodedString += str.length + "#" + str;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStrings = [];
        let i = 0; // Our pointer for reading the string

        while (i < str.length) {
            // 1. Find where the next '#' is, starting from our current position 'i'
            let hashIndex = str.indexOf('#', i);
            
            // 2. Extract the length number (everything between 'i' and the '#')
            let length = parseInt(str.substring(i, hashIndex), 10);
            
            // 3. Extract the actual string using the length we just found
            let startOfString = hashIndex + 1;
            let endOfString = startOfString + length;
            let extractedString = str.substring(startOfString, endOfString);
            
            // 4. Push to result and move our pointer 'i' to the start of the next chunk
            decodedStrings.push(extractedString);
            i = endOfString;
        }

        return decodedStrings;
    }
}
