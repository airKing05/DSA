// L#6 438

//Given two strings s and p, return an array of all the start indices of p's anagrams in s. 

// Input: s = "cbaebabacd", p = "abc"
// Output: [0, 6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".


// m1
//m1 brought forth approach
// "cbaebabacd", p = "abc"
// find each sub string 
// cba, bae, eba, aba, bac, acd
// now chek subStr with P either by sorting(subStr, P) 's char;  T: O(N*NlogN) and S:O(N);
// iether hash(subStr, P);  T: O(N*N) and S:O(N);
// return the index of subStr




function findAllAnagramsStr(str, p) {
    let len = str.length;
    let pLen = p.len;

    for (let i = 0; i < len; i++) {
        let subStr = str.subStr(i, i + pLen);
        console.log("subStr", subStr)
    }
}
// const result = findAllAnagramsStr("cbaebabacd", "abc");
// console.log(result)


// m2 sliding window
//T: O(N) and S: O(N) => if p would be s;

const isArrValueEqual = (arrS, arrP) => {
    for (let i = 0; i < arrS.length; i++)  if (arrS[i] !== arrP[i]) return false;
    return true;
}
function findAllAnagramsStr1(str, p) {
    const strArr = new Array(26).fill(0);
    const pArr = new Array(26).fill(0);
    const subStrIndex = [];

    for (let i = 0; i < p.length; i++) {
        let index = p.charCodeAt(i) % 26;
        pArr[index]++;
    }

    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i) % 26;
        strArr[index]++;

        if (i > p.length-1) {
            let headIdx = str.charCodeAt(i - p.length) % 26;
            strArr[headIdx]--;
        }

        if (i >= p.length-1) {
            if (isArrValueEqual(strArr, pArr)) {
                subStrIndex.push(i - (p.length - 1));
            }
        }
    }
    return subStrIndex;
}
const result1 = findAllAnagramsStr1("cbaebabacd", "abc");
console.log(result1)
