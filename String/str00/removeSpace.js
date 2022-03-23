const removeSpace = (str) => {
    let splitStr = str.split('');
    let joinStr = '';
    let l = str.length;

    for(let i=0; i<l; i++){
       if(splitStr[i] !== " "){
           joinStr = joinStr + splitStr[i];
       }
    }

   return joinStr;
}

let str = "anil ra j meen a"
const result = removeSpace(str);
console.log(result);