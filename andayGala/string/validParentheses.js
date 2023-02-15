// L#3 20

// containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()" => true, "()[]{}"=> true, "(]"=> false




function validParentheses(str){
    let len =str.length;
    const stack = [];
    const parentheses = "() {} []";

    let i= 0; 
    while(i<len){
        stack.push(str[i]);
        i++;

        let openParen = stack[stack.length-2];
        let closeParen = stack[stack.length-1];
        
        let parenth = openParen+closeParen;

        //console.log(stack, parenth)
        if(parentheses.includes(parenth)){
           // console.log("salknglksfm", parenth)
            stack.pop();
            stack.pop();
        }
        //console.log(stack)
    }
    return stack.length === 0;

}
const result = validParentheses("([]{})");
console.log(result)