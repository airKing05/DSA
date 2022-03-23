
const reverseString = (str) => {

    let revStr = "";
    let l = str.length;

    for (let i = l - 1; i > -1; i--) {
        revStr = revStr + str[i]
    }
    return revStr;
}

let str = "abcdef"
const result = reverseString(str);
console.log(result);