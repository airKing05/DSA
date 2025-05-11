// p-1768
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r



var mergeAlternately = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;

    let loopLen = Math.min(len1, len2);

    

    let i=0;
    let newStr = '';
    while(i<loopLen){
        newStr+=word1[i] + word2[i];
        i++;
    };

    if(len1 > len2){
        const remaningStr = word1.slice(i, len1)
        // console.log("remaningStr", i, remaningStr)
        newStr+=remaningStr;
    }else{
        newStr+=word2.slice(i, len2);
    }

    console.log("newStr", i, newStr)

};


const result = mergeAlternately("abc1234567", "pqrmno")