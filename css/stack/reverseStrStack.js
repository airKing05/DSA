//L#16
// reverse string by stack


let str = "hello";
let arr = str.split('');

let stackData = [];
let reverseStackData = [];

function passToStack(ele) {
    stackData.push(ele);
    // console.log(stackData);
};
function pushInStack(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        passToStack(arr[i])
    }
}
pushInStack(arr);

// reverse process
function removeToStack(stackData) {
    let len = stackData.length;
    for (let i = 0; i < len; i++) {
        reverseStackData.push(stackData.pop())

    }
    console.log(reverseStackData.join(''))
}
removeToStack(stackData)


// method 2

let str1 = "hello";
let stack = []
let currentSize = stack.length;

function push(ele) {
    stack[currentSize] = ele;
    currentSize+=1;
};
function pop() {
   let lastRemovedItem = stack[currentSize-1]
        stack.pop();
        currentSize-=1
    return lastRemovedItem
};

function reverseStr(item) {
    let len = item.length;

    // add one by one element to the stack
    for (let i = 0; i < len; i++) {
        push(item[i])
    }

    // removing the one by one element to the stack
    for (let i = 0; i < len; i++) {
        item[i] = pop()
    }
}
let splitStr = str.split('')
reverseStr(splitStr)
console.log(splitStr.join(''))