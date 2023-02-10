// L#16 287
// There is only one repeated number in nums, return this repeated number.
// Input: nums = [1, 3, 4, 2, 2]
// Output: 2


//m1 by filter method
// T: O(N**2) AND S:O(1)

function duplicateNumArr(arr){
  let duplicateNum = arr.filter((item, index, array) => array.indexOf(item) != array.lastIndexOf(item));
  return duplicateNum[0];
};

const result1 = duplicateNumArr([1, 3, 4, 2, 2]);
console.log("result1", result1);


//m2
// by hash 
// T: O(N) AND S:O(N)

//m3 
// take One ele check if it is included in rest part of the array
// T: O(N**2) AND S:O(1)


//m4 
// check the video 
// T: O(N) AND S:O(1)


//m4 
// check Array/babbbar01/findDuplicateNumber.js