// remove space and add instance of space @40

const removeSpaceAddSymbol = (str) => {
    let tempStr = " ";
    let strLen = str.length;
    for (let i = 0; i < strLen; i++) {
        if (str[i]=== " ") {
            tempStr.concat('b');
        } else {
            tempStr.concat(str[i])
        }
    }
    return tempStr;
}

let string = 'my name is anilraj'
let result = removeSpaceAddSymbol(string);
console.log(result)