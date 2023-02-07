//l#4

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.


//Input: nums = [1,2,2,3], [1,1,1] [6, 5, 4, 4]
// Output: true


// in this case array always be sorted
// retun false is itration of array does not match these conditions
//  same => arr[0]===arr[len-1]
// increasing  => arr[0]<arr[len-1]
// decreasing => arr[0]> arr[len-1]


function isMonotonic(arr) {
    let len = arr.length;

    // check the two elements
    let same = arr[0] === arr[len - 1];
    let increasing = arr[0] < arr[len - 1];
    let decreasing = arr[0] > arr[len - 1];
console.log(same, increasing, decreasing)
    if (same) {
        for (let i = 0; i < len; i++) {
            if (arr[i - 1] !== arr[i]) {
                return false;
            } 
          
        }
    } else if (increasing) {
        for (let i = 0; i < len; i++) {
            if (arr[i - 1] > arr[i]) {
               
                return false;
            } 
          
        }
    } else {
        for (let i = 0; i < len; i++) {
            if (arr[i - 1] < arr[i]) {
                return false;
            }
           
        }
    }

    return true;
}
const result = isMonotonic([1, 2, 2, 3  ])
console.log(result);
