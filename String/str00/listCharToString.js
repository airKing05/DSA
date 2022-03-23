const listChatToString = (arr) =>{
let l = arr.length;
let str = "";
for(let i=0; i<l; i++){
    str += arr[i]
}
return str
}

const arr = ["a", "n", "i", "l"];
const result = listChatToString(arr);
console.log(result)