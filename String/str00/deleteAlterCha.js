// delete alternate character form the given string

const deleteAlterCha = (str) => {
    let newSmallStr = '';
    let l = str.length;

    for(let i=0; i<l; i++){
       if(i%2==0){
        newSmallStr = newSmallStr + str[i];
       }
    }

   return newSmallStr;
}

let str = "anilrajmeena"
const result = deleteAlterCha(str);
console.log(result);