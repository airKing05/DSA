class Stack {
    constructor(n) {
        this.arr = new Array(n).fill(2);
        this.size = 8
        //this.len = arr.length;
        this.top1 = -1;
        this.top2 = this.size;
    };
    // push in stack1
    push1(ele) {
        if (this.top2 - this.top1 > 1) {
            this.top1++;
            //this.arr.push(element)
            return this.arr[this.top1] = ele;
        } else {
            return "stack over flow"
        }
    }
    //pop from stack1
    pop1() {
        if (this.top1 >= 0) {
            let ele = this.arr[this.top1];
            this.top1--;
            return ele;
        } else {
            return "stack1 is empty"
        }
    }
    // push in stack2
    push2(ele) {
        if (this.top2 - this.top1 > 1) {
            this.top2--;
            return this.arr[this.top2] = ele;
        } else {
            return "stack over flow"
        }
    }
    // pop from stack2
    pop2() {
        if (this.top2 < this.size) {
            let ele = this.arr[this.top2];
            this.top2++;
            return ele;
        } else {
            return "stack is under flow"
        }
    }
}
const twoStack = new Stack();
console.log(twoStack.push1(3));
console.log(twoStack.push1(4));
console.log(twoStack.push1(4));
console.log(twoStack.push1(4));
console.log(twoStack.push1(1));


console.log(twoStack.push2(8));
console.log(twoStack.push2(2));

console.log(twoStack.pop1());
console.log(twoStack.pop2());


// this line of code is not working
console.log(twoStack.arr)