//L#24  643

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.Any answer with a calculation error less than 10 - 5 will be accepted.

// Input: nums = [1, 12, -5, -6, 50, 3], k = 4
// Output: 12.75000
// Explanation: Maximum average is(12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


// m1 
// T: O(N**2) and S:O(N)

function maxAvgSubArr(arr, k){
let len = arr.length;
let subArr = [];
j=0;
let divisor = k
while(k<=len){
    let sum = 0;
    for (let i = j; i < k; i++) {
       sum = sum + arr[i]; 
    } 
    console.log(sum)
    let avg = sum/divisor;
    subArr.push(avg);
    k++;
    j++;
}
    return Math.max(...subArr);
}
const result = maxAvgSubArr([1, 12, -5, -6, 50, 3], k = 4);
console.log(result)


//m2 sliding window
//
// [1, 12, -5, -6, 50, 3], k = 4
// s
// e            e  => calculate avg 
//     s           e

// T: O(N) and S:O(1);
function maxAvgSubArr2(arr, k) {
    let len = arr.length;
   let maxAvg = -Infinity;
   let soFar = 0;
   let windowStart = 0;

   for(let windowEnd =0; windowEnd<len; windowEnd++){
    soFar = soFar + arr[windowEnd];

    if(windowEnd-windowStart == k-1){
        avg = soFar/k;
        maxAvg = Math.max(avg, maxAvg);
        soFar = soFar-arr[windowStart]; // for next step need to remove the array's first element 
        windowStart++;                 //  now increase start point for the next avg
    } 
   }
    return maxAvg;
}
const result2 = maxAvgSubArr2([1, 12, -5, -6, 50, 3], k = 4);
console.log("result2", result2)