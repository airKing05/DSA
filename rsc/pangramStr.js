//fie#03

// check stting is pangram or not 
// sentance of string should be contains alphabet of English

function pangramStr(str){
    let later = new Array(26).fill(false);
    let len = str.length;

    let index;
    for(let i=0; i<len; i++){
        if(str[i] >= 'A' && str[i]<='Z'){
           index = str.charCodeAt(i) - 'A'.charCodeAt(0);
        }else if(str[i] >= 'a' && str[i]<='z'){
            index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        }else{
            continue;
        }
        later[index] = true
    }

    for(let i=0; i<later.length; i++){
        if(later[i] === false){
        return false;
        }
    }
    return true
    }
       

const string = 'The quick brown fox jumps over the lazy dog'; 
const result = pangramStr(string);
console.log(result);