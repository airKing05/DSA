//L#04  reverser interger number

//m1 
// number=>string=>arr=>reverse=>string(join)=>number interger

let number = -3002;

function reverseInt1(num) {
    let str = num.toString();
    str = str.split("").reverse().join("");
    let reverserNum = parseInt(str);

    if (num < 0) {
        return -1 * (reverserNum);
    }
    return reverserNum;
}

const result1 = reverseInt1(number);
//console.log("result1", result1);



//m2 without js function

function reverseInt2(number) {
    let num;
    if (number < 0) {
        num = -1 * number;
    } else {
        num = number;
    }
    let newNum = 0;
    while (num != 0) {
        let lastDegit = num % 10;
        num = Math.floor(num / 10);
        newNum = newNum * 10 + lastDegit;
    }
    if(number<0){
        return -1*newNum;
    }
    return newNum;
}
const number2 = -13;
const result2 = reverseInt2(number2);
console.log("result2", result2)
