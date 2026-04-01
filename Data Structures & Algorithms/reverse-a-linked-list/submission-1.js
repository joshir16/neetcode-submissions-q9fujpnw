/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
       let prev = null;
    let curr = head;

    while (curr !== null) {
        // 1. Save the next node so we don't lose the rest of the list
        let nextTemp = curr.next;
        
        // 2. Reverse the arrow! Point it backward to 'prev'
        curr.next = prev;
        
        // 3. Shift both pointers one step forward for the next loop
        prev = curr;
        curr = nextTemp;
    }

    // When the loop ends, 'curr' has fallen off the end (null)
    // and 'prev' is standing directly on the new head of the list
    return prev;
    }
}
