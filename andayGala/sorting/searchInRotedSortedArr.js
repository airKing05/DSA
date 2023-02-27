// L#7

// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// Output: 4


// [4, 5, 6, 7, 0, 1, 2]
//  l        m        r

// 1. check is target is equle mid
// 2. check wich side is sorted left or rigth 
// 2a. left =>left<mid 
// 2b. right =>right>mid
// 3. check targrt lies on wich side left or right
// 3a. left=> left<targt<mid
// 3b. right=> else;
// 4. do the binary search


//T: O(logN)
// and S: O(1)  does not creating the extra space realative to the size of the input array

function searchInRotedSortedArr(arr, target) {
    let len = arr.length;
    let left = 0;
    let right = len - 1;
    while (left <= right) {
        let mid = parseInt(left + (right - left) / 2);

        if (target === arr[mid]) {
            return mid;
        }
        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = left + 1;
            }
        } else {
            if(target>=arr[mid] && target <=arr[right]){
                left = mid+1;
            }else{
                right = mid-1;
            }
      
        }
    }
    return -1;
};

const result = searchInRotedSortedArr([4, 5, 6, 7, 0, 1, 2], target = 0);
console.log(result)