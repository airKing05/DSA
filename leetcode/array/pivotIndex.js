// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11



var pivotIndex = function(arr) {
    const len = arr.length;

    let sum = arr.reduce((acc, curr) => acc+curr, 0);
    let sum1 = sum;
    let sum2 = 0;

    for(let i=0; i<len-1; i++){
        sum1 = sum1 - arr[i]
       if(sum1 === sum2){
          console.log(i);
       }else{
         sum2+=arr[i];
       }
    }
};


const result = pivotIndex([1,7,3,6,5,6])