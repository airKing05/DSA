const subStrbyCharRange = (str, s, e) =>{
    let l = str.length;
    let newStr = ""
   for (let i=s; i<=e; i++ ){
        newStr += str[i];
   }
    return newStr
}

const str = "anilraj";
const result = subStrbyCharRange(str, 0, 5);
console.log(result)