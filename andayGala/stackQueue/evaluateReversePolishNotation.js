// L#7  150

// Evaluate the expression.Return an integer that represents the value of the expression.
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.

// Input: tokens = ["2", "1", "+", "3", "*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Input: tokens = ["4", "13", "5", "/", "+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6


// T: O(N) and S: O(N)  

class Stack {
    constructor() {
        this.stack = [];
    }

    add(val) {
        this.stack.push(val);
    }

    remove() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
}

function evaluateReversePolishNotation(tokens) {
    const stack = new Stack();
    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.add(token);
        } else {
            let num2 = parseInt(stack.remove());
            let num1 = parseInt(stack.remove());
            let newNum;
            if (token == "+") {
                newNum = num1 + num2;
            } else if (token == "*") {
                newNum = num1 * num2;
            } else if (token == "/") {
                num2 === 0 ? 'infinty' : newNum = Math.trunc(num1 / num2);
            } else {
                newNum = num1 - num2;
            }
            //console.log(num1, num2, newNum)
            stack.add(newNum);
        }
    }

    return stack.peek();
}

// const result = evaluateReversePolishNotation2(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
// console.log(result);



// m2 
// without implementing the stack logics

function evaluateReversePolishNotation2(tokens) {
    const stack = [];

    const opraters = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => Math.trunc(num1 / num2)
    };


    for (let token of tokens) {
        if (opraters[token]) {
            let num2 = stack.pop();
            let num1 = stack.pop();
            let newNum = opraters[token](num1, num2);
            console.log(num1, num2, newNum)
            stack.push(newNum)
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack[stack.length-1];
}

const result = evaluateReversePolishNotation2(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
console.log(result);