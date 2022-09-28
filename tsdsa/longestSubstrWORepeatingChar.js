//#L21
// longest Substring without Repeating Charactor
// sliding window

const longestSubstrWORepeatingChar = (str) => {
    
    let len = str.length;
    if(len<0){
        return 0;
    }

    let start = 0;
    let end = 0;
    let uniqueChar = new Set();
    let maxUniqLen = 0;
    while (end<len) {
        if(!uniqueChar.has(str[end])){
            uniqueChar.add(str[end]);
            end++;
            maxUniqLen = Math.max(maxUniqLen, uniqueChar.size);
        }else{
            uniqueChar.delete(str[start]);
            start++;
        }
    }
    return maxUniqLen;
};

const string = "abcabdacefg"
const result = longestSubstrWORepeatingChar(string);
console.log(result)