let str = "abcdef"

let revStr = str.split("");
let arr = [];
let l = revStr.length;

for(let i=l-1; i>-1; i-- ){
  arr.push(revStr[i])
 
}
console.log(arr)
let newStr = arr.join('');
console.log(typeof newStr);