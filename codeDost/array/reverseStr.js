//reverse string word by word
// do all type of reverse

function reverseStr(str){
let str1 = str.split(" ").map((item) =>item.split("").reverse().join('')).join(' ')
let str2 = str.split(" ").reverse().join(' ')
return { str1, str2}
};
const str = "this is my string";
const result = reverseStr(str);
console.log(result);
