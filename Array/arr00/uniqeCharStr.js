

function uniqeCharStr(str){
let len = str.length;

for(let i=0; i<len; i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
        return str[i];
    }
}
return -1;
}

const result = uniqeCharStr("abcbac");
console.log(result);