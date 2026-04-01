class MyStack {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.arr.push(x);
        for(var i=0; i<this.arr.length - 1; i++){
            this.arr.push(this.arr.shift())
        }
    }

    /**
     * @return {number}
     */
    pop() {
        
        return this.arr.shift(); 
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.arr.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
