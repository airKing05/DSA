//leetcode 1207

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.


// Input: arr = [1,2]
// Output: false


const arrToMap = (str) => {
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

const uniqueNoOfOccurance = (arr) => {
    const map = arrToMap(arr);
    const values = Object.values(map);
    const set = new Set(values);
    console.log(values, set.size)

    if(values.length === set.size) return true;
    return false
}
uniqueNoOfOccurance([1,2,2,1,1,3])