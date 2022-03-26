const removeCharNumericStr = (str) => {
    let l = str.length;
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let len = number.length;
    let newStr = "";

    for (let i = 0; i < l; i++) {
        isNaN(str[i]) ? newStr += str[i]  : newStr += "_"
    }
    return newStr;
}
const str = "1anil2raj4";
const result = removeCharNumericStr(str);
console.log(result)