// leetcode 1684

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

const strToMap = (str) => {
      const map = {};
      
      for(let i=0; i<str.length; i++){
          if(map[str[i]]){
              map[str[i]]++;
          }else{
              map[str[i]]=1;
          }
      }
      
      return map
  }
  
  const isAllCharExist = (allowedObj, str) => {
      let count = 1;
      for (let i = 0; i<str.length; i++){
          if(!allowedObj[str[i]]){
              count = 0;
          }
      }
      return count;
  }
const countNoOfConsistantStr = (allowed, arr) => {
    const allowedObj = strToMap(allowed);
    console.log("allowedObj", allowedObj)
    
    let totalAllowedStrs = 0;
    for(let i = 0; i<arr.length; i++){
        const strObj = strToMap(arr[i]);
        if(isAllCharExist(allowedObj, arr[i])){
            console.log("arr[i]", arr[i])
            totalAllowedStrs++;
        }
    }
    console.log("totalAllowedStrs", totalAllowedStrs)
}

countNoOfConsistantStr("abc", ["a","b","c","ab","ac","bc","abc"])