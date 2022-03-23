const reverseTwoStr = (str1, str2) => {
    let str = str1.concat(str2);
    let l = str.length;
    let revStr = "";
    for (let i=l-1; i>-1; i--){
       revStr += str[i];
    }
    
   return revStr;
}

let str1 = "anil";
let str2 = "raj";
const result = reverseTwoStr(str1, str2);
console.log(result);