// ignore special and symble in str
// averthing should be lower case
// include only A-Z, a-z, 0-9
// if  find valid char then swap



// to check character is valid or not
function validChar(char) {
    if ((char >= 'a' & char <= 'z') || (char >= 'A' & char <= 'Z') || (char >= '0' & char <= '9')) {
        console.log("char1-" + char)
        return 1
    }
    return 0;
}

// converting to lowerCase
function toLowerCase(char) { // can also use char bcoz it is local variable of this function
    if ((char >= 'a' & char <= 'z') || (char >= '0' & char <= '9')) {
        console.log("char2" + char)
        return char;
    } else {
        let tempChar = char - 'A' + 'a';         //// ye kaam nahi kar rha hai 
        console.log("tempChar--" + tempChar)
        return tempChar
    }
}


// check palindrome or not
const checkPalindrome = (checkTempStr) => {
    let checkTempStrLen = checkTempStr.length;
    let s = 0;
    let e = checkTempStrLen - 1

    for (let i = 0; i < checkTempStrLen / 2; i++)
        if (checkTempStr[s] === checkTempStr[e]) {
            console.log("hai")
            return true
        } else {
            console.log("nahi hai")
            return false
        }


};




//removing invalid char from the string 
// main function
function isPalindrome(str) {
    let tempStr = " ";
    let strLen = str.length;

    // faltu character ko hatado
    for (let j = 0; j < strLen; j++) {
        if (validChar(str[j])) {
            tempStr.concat(str[j]);
            console.log("str[j]-" + str[j])
        }
    }


    // ab lower case me change krdo
    let tempStrLen = tempStr.length;
    for (let i = 0; i < tempStrLen; i++) {
        tempStr[i] = toLowerCase(tempStr[i])
    }


    // ab palindrome hai ki nahi check kro
    return checkPalindrome(tempStr)
}

let character = 'Abc@baf'
let result = isPalindrome(character);
console.log(result)