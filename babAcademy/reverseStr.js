//L#01
//Q1 - reverse string

// m-1 str=>arr=>reverse=>str
const string = "abcd";

function reverseStr1(str){
    str = str.split("").reverse().join("");
    return str;
}

const result1 = reverseStr1(string);
console.log("result1", result1)


//m2
//create empty str => loop through each char => retunr reverse

function reverseStr2(str){
    let len = str.length;
    let newStr = "";

    for(let i=0; i<len; i++){
        newStr = str[i] + newStr;
    }
 return newStr;
}

const result2 = reverseStr2(string);
console.log("result2", result2);