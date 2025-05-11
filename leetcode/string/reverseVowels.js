// leetcode - 345

// Input: s = "IceCreAm"s

// Output: "AceCreIm"

const replaceCharAt = (string, index, char) => {
  return newStr = string.substring(0, index) + char + string.substring(index+1)
}

var reverseVowels = (s) => {
    let str = s; //s.toLowerCase();
    const vowels = 'aeiouAEIOU';
    let len = str.length;

    let start = 0;
    let end = len - 1;

    while(start < end){
      if(vowels.includes(str[start]) && vowels.includes(str[end])){
         console.log("innn",start,str[start], end,  str[end])
         const vowelAtStart = str[start];
         const vowelAtEnd = str[end];
         // str = str.replace(vowelAtStart, vowelAtEnd);
         str = replaceCharAt(str, start, vowelAtEnd);
         str = replaceCharAt(str, end, vowelAtStart);

         console.log("innn",str)

          start++;
          end--;
      }else if(!vowels.includes(str[end]) ){
         // console.log("dsdsd",end, str[end], vowels.includes(str[end]))
         end--;
      }else if(!vowels.includes(str[start])){
         start++;
      }else{
         start++;
         end--;
      }
    }

    console.log("str", str)
};


const result = reverseVowels("IceCreAm");



