// SEO dekhna hai 
// customm componets 
// Debouncign the apply the 
// form data set into the reverse oder
// Home, Section

function maxOccCharStr(str){
    str = str.split(" ").join("");
    obj = {};
    for(let i of str){
        obj[i] = obj[i]+1 || 1
    }
    let max = 1;
    let maxChar = null;
    for(let i in obj){
       if(obj[i]>=max){
        max = obj[i];
        maxChar = i;
       }
    }
    return maxChar;
};

const str = "this is my string";
const result = maxOccCharStr(str);
console.log(result);