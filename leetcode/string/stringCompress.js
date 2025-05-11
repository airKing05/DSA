// leetcode - 443

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".


// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".



// NOTE: - "b" occurs 12 times → add "1" and "2" (not "12" as one string)

const numberToChar = (number) =>{
    let num =number;
    const chatArr = [];
    while(num>0){
        let remider = num%10;
        chatArr.unshift(remider.toString());
        num = Math.floor(num/10);
    }
    return chatArr;
}

var compress = function(chars) {
  let newCompressArr = [];
  let len = chars.length;
  let charCount = 1;
  let firstChar = chars[0];
  for(let i = 1; i<=len; i++){
      if(firstChar === chars[i]){
        charCount++;
      }else{
        newCompressArr.push(firstChar);
        if(charCount>9){
            const counts = numberToChar(charCount);
            newCompressArr = [...newCompressArr, ...counts]
        }else if(charCount>1){
            newCompressArr.push(charCount);
        }
   
        firstChar=chars[i];
        charCount=1;
      }
  }

  console.log(newCompressArr)
};

const chars = ["a","a","b","b","c","c","c", "d","e"];
const chars2 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
compress(chars);
