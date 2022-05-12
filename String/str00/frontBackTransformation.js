const frontBackTransformation = (str) => {
    let l = str.length;
    let newStr = "";
    let temp;
    for (let i = 0; i < l; i++) {
       if(str[i]>='a' && str[i]<='z'){
          newStr += str[25-i]

       }
    }
    return newStr;
}
const str = "1anil2raj4";
const result = frontBackTransformation(str);
console.log(result)