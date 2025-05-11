// p-- 485

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// approch- two pointers

var findMaxConsecutiveOnes = function(arr) {
     const len = arr.length;
     let maxOccrance = 0;
     let count = 1;
     let start = 0;
    for(let i = 1; i<len; i++){
     if(arr[start] === arr[i]){
         count++;
         maxOccrance = Math.max(count, maxOccrance);
     }else{
         start = i;
         count = 1;
     }
    }
    
    return maxOccrance;
};

const result = findMaxConsecutiveOnes([1,1,0,1,1,1]);
console.log("result", result)