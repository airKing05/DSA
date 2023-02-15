// L#4 3

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


//m1
//  abcbb
// Y    Y   Y    N     N
// a,  ab, abc, abcb, abcbb
// a:1 a:1  a:1  a:1   a:1
//     b:1  b:1  b:2   b:3
//          c:1  c:1   c:1


// T: O(N**3) S: O(N**2 + N**2)= O(N**2)


//m2 sliding window
// by set ../../tsdsa/logenstSubstrWORepeatingChar.js


// m2a sliding window
// object
//       01234567
//  s = "abcabcbb"          
//       S 
//       E 
// 
// osFar = obj();         i      S    E            max = E-S+1
// a:1,->2->1             0      a    a             0, 1
// b:1 ->2->1             1      a    b             1, 2
// c:1 ->2->1             2      a    c             2, 3 = max
//                        3      b    a             3, 3   
//                        4      c    b             3, 3

// T: O(N**2) and S:O(N)


function longestSubstrWithoutRepeatingChar(str){
    let len = str.length;
    let windowStart = 0;
    let soFar = {};
    let max = 0;
    let subStr = '';

    for(let windowEnd=0; windowEnd<len; windowEnd++){
        let rightChar = str[windowEnd];
        if(rightChar in soFar){
            soFar[rightChar] = soFar[rightChar]+1
        }else{
            soFar[rightChar] = 1; 
        }

        while(soFar[rightChar]>1){
            let leftChar = str[windowStart];
            if (soFar[leftChar]>1){
                soFar[leftChar]--;
            }else{
                delete soFar[leftChar];
            }
            
            windowStart++;
           
        }
       

        max = Math.max(max, (windowEnd-windowStart)+1);
    }
return {max, subStr};
}

const result = longestSubstrWithoutRepeatingChar("abcabcbb");
console.log(result)