// L#02

// "abba" === "abba"

const string = "abba";

function palindrome(str) {
    let len = str.length;
    let arr = str.split("");
    let newArr = [];

    for (let i=0; i<len; i++) {
        let lastChar = arr.pop();
        newArr.push(lastChar);
    }
    let newStr = newArr.join("");
    console.log(newStr)
    if (str === newStr) {
        return true;
    }
    return false;
}

const result = palindrome(string);
console.log(result);