// coding chanllenge #02

// given string swap first element to last elemet

function firstLastEleSwapStr(str){
    let len = str.length;
    // by substr method {it will take length(how much length's of char we need)}
    //let newStr = str[len-1] + str.substr(1, len-2) + str[0]
    // by substring method {it will take range (starting and end point)}
    let newStr = str[len-1] + str.substring(1, len-1) + str[0]
    return newStr
}

const string = "anilraj";
const result = firstLastEleSwapStr(string);
console.log(result);