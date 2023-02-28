// L#6 155
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.


class MinStack{
    constructor(){
        this.stack = [];
        this.minStack = [];
    };

    add(val){
        if(!this.stack.length){
            this.stack.push(val);
            this.minStack.push(val);
        }else{
            this.stack.push(val);
            let minVal = Math.min(this.minStack[this.minStack.length-1], val);
            this.minStack.push(minVal);
        }
    }

    remove(){
        if(!this.stack.length) return null;
        this.minStack.pop();
        return this.stack.pop();
    }

    top(){
        if (!this.stack.length) return null;
        return this.stack[this.stack.length-1];
    }

    getMin(){
       return this.minStack[this.minStack.length-1];
    }
}


const stack = new MinStack();

function addToStack(arr) {
    for(let i=0; i<arr.length; i++){
       stack.add(arr[i])
    }
    return stack;
}
const result = addToStack([1,5,-6,32,-15,3]);
console.log(result);


console.log(stack.getMin(), stack.top())