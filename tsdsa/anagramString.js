// L#03
// check given string is anagram or not
// anil = lnia 
// time complexity will be linear


function anagramString(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    let isAnagram = true;
    if (len1 !== len2) {
        isAnagram = false
    }
    // mapping the data of str1
    let dataStr1 = {};
    for (let i = 0; i < len1; i++) {
         // dataStr1[str1[i]] = (dataStr1[str1[i]] || 0 ) + 1
         // obj[i] = (obj[i]+1) || 1
        if (str1[i] in dataStr1) {
            dataStr1[str1[i]]++
        } else {
            dataStr1[str1[i]] = 1
        }
    }
    
    for (let i = 0; i < len1; i++){
        if (!dataStr1[str2[i]]){
            // if get any other value of str2[i] which is does not exit in dataStr1 return false
            isAnagram = false
        }
       // if str2[i] is exist on the on  dataStr1, then delete that str2[i] from the object
            dataStr1[str2[i]]--   
    }
    console.log(dataStr1)
    return isAnagram;
}

const word1 = "hello";
const word2 = "hollo";
const result = anagramString(["flower","flow","flight"]);
console.log(result)
