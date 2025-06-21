//leetcode- 438

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

const sortStr = (str) => str.split("").sort().join("");

function findAnagrams(str, target){
    const sortedTarget = sortStr(target);
    const windowLen = sortedTarget.length;
    
    const posintionOfExistingAnagram = [];
    let subStr = '';
    for(let i=0; i<str.length; i++){
        subStr += str[i];
      
        if(subStr.length === windowLen){
            const sortedSubStr = sortStr(subStr);
           
            if(sortedSubStr === sortedTarget){
                
                let pointOfAnagram = i-2; // starting point for founded anagram
                posintionOfExistingAnagram.push(pointOfAnagram);
                 
            }
            subStr = subStr.slice(1, i+1); // remove first element form subStr
            
            
        }
    }
    console.log(posintionOfExistingAnagram)
}

findAnagrams('cbaebabacd', 'abc')