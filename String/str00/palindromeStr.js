// does not working


function reverse(str) {
    let splitStr = str.split('');
    // console.log(splitStr)
    let arr = [];
    let l = splitStr.length;
    // console.log(l)
    for (let i = l-1; i > -1; i--) {
        arr.push(splitStr[i])
       
    }
    let newStr = arr.join('')
    console.log(newStr)

    if(str == newStr){
        return true
    }else{
        return false
    }
   
}

const string = "abcdcba"
const result = reverse(string);
 console.log(result);
