// remover sub str "abc" from string "dababc"
// not working

// topis need to cover in the sting
// permutation in string
// remove all adjacent duplicate from a sting
// string compression

const removeSubStrFromStr = (str, subStr) => {
    while (str.length != 0 & str.includes(subStr) < str.length) {
        str.split(str.includes(subStr))
    }
    return str;
}

const string = "daabcbaabcb";
const subString = "abc"
const result = removeSubStrFromStr(string, subString);
console.log(result);