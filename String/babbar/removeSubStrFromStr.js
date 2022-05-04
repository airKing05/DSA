// remover sub str "abc" from string "dababc"
// not working

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