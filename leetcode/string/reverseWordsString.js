// leetcode - 151


var reverseWords = function (s) {
    let newStr = ''
    let word = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            word = word + s[i]
        } else {
            if (word) {
                newStr = word + " " + newStr;
                word = ''
            }
        }

        // do not have " " after string componeted so we have to forcefull push last word to newStr
        if (i === s.length - 1) {
            if (word) {
                newStr = word + " " + newStr;
                word = ''
            }
        }
    }

    console.log("newStr", newStr)
};

const s = "the sky is blue"; //"blue is sky the"
const s2 = "  hello world  "; //"world hello"
reverseWords(s2)