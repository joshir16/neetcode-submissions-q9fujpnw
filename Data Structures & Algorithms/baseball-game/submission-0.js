class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let result = []
        for(let op of operations){
            switch (op) {
                case "+":
                    result.push(result[result.length - 1] + result[result.length - 2])
                    break

                case "D":
                    result.push(result[result.length - 1] * 2)
                    break

                case "C":
                    result.pop()
                    break

                default:
                    result.push(Number(op))
                    break
            }
        }
        console.log(result)

        return result.reduce((a,b) => a + b, 0)
    }
}
