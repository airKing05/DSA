// l#2 340

// retrun a subStr length, who has "K" Distinct characters

// input: s = "eceba" k=2
// output: 3  subStr = "ece"; has three char who have 2 different char

// input: s ="aa" k=2
// output: 2 subStr = "aa"; has two char who have single char


// m1
//  s = "eceba"
//  'e', 'ec', 'ece', 'eceb', 'eceba'
//  'c', 'ce', 'ceb', 'ceba'
//  'e', 'eb', 'eba'
//  'b', 'ba',
//  'a'

// now fiterout who has max two types of char
// sort and find out the max length
// "ece"

// T: O(N**3) and S:O(N**2)







// m2 sliding window
//       01234
//  s = "eceba"           k=2
//       S 
//       E 
// Map.size>k reduce
// osFar = Map();               S    E            max = E-S+1
// e:1,->2->1->0                e    e             0, 1
// c:1 ->0                      e    c             1, 2
//                              e    e             2, 3 = max
// b:1                          e    b             2, 3   
// a:1                          b    a             2, 3

// T: O(N**2) and S:O(N)

function longestSubStrKdiffChar(str, k){
    let len = str.length;
    const soFar = new Map();
    let windowStart = 0;
    let max  = 0;


    for(let windowEnd = 0; windowEnd<len; windowEnd++){
        let rightChar = str[windowEnd];

        // set into the map
        if(!soFar.get(rightChar)){
            soFar.set(rightChar, 1);
        }else{
            soFar.set(rightChar, soFar.get(rightChar)+1)
        }

        // if subStr size is >k, then remove elements from the 
        while (soFar.size>k) {
            let leftChar = str[windowStart];

            if(soFar.get(leftChar)>1){
                soFar.set(leftChar, soFar.get(leftChar)-1);
            }else{
                soFar.delete(leftChar);
            }
            windowStart++;
        }

        max = Math.max(max, (windowEnd-windowStart)+1);
    }
return max;
}
const result = longestSubStrKdiffChar("eceba", k=2);
console.log(result)
