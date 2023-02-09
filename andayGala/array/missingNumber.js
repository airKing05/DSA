// L#14   268   

// Input: nums = [0, 1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range[0, 2]. 2 is the missing number in the range since it does not appear in nums.

// Input: nums = [3, 0, 1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range[0, 3]. 2 is the missing number in the range since it does not appear in nums.


// m1
// sort array and find the missing number
// T:O(nlogn) S: O(1)

// m2 
// hash
// T:O(n) S: O(n)

function missingNumber2(arr){
let obj = {}
for(let i=0; i<arr.length; i++){
    obj[arr[i]]=i;
}
let objkeys = Object.keys(obj);

for(let i = 0 ; i<objkeys.length; i++){
   if(objkeys[i+1] - objkeys[i] !=1 ){
       console.log( Number(objkeys[i])+1);
   }
}
}
const result2 = missingNumber2([ 0, 1])
console.log(result2)


//m2a
function missingNumber2a(arr) {
    let len  = arr.length;
    let obj = {}
    for (let i = 0; i < len; i++) {
        obj[arr[i]] = true;
    }

    for(let i = 0; i<=len; i++){
        if(!obj[i]){
           return i
        }
    }
  
}
const result2a = missingNumber2a([0, 1])
console.log("result2a",result2a)


// m3
// by sum of N number formula
function missingNumber3(arr) {
    let len = arr.length;
    
    let gSum = len*(len+1)/2;

    let sum = 0;
    for(let i=0; i<len; i++){
        sum+=arr[i];
    }
    return gSum-sum

}
const result3 = missingNumber3([3, 0, 1])
console.log("result3", result3)


