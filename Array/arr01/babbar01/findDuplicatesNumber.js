// total numbers in array is n,  array is such type of that the element in array is like [1, n-1]
// number is [1, n-1] so there is a one extra element is there which is duplicate of any numbers.

// maybe it is not working
const findDuplicatesNumber = (arr) =>{
  let ans = 0;
  let l = arr.length;
    // xor all element of the array
  for (let i =0; i<l; i++){
      ans = ans^arr[i];
  }
  // XOR [1, n-1]
  for (let i = 1; i< l; i++ ){
      ans = ans^i;
  }
  return ans
};

const array = [1,2,3,4,2]; // element could be random   // print 2
const result = findDuplicatesNumber(array); // argument or params ke naam different hot hot behet hai
console.log(result)