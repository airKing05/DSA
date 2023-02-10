// L#17 702
// given array is sorted but dont know the upper bound(length), find the target elements

// can't apply linear seach because it could be go to infinite loop
// can't apply binary search, dont know the upper bound


// will take two pointer left and Right
// check that target is in between the left and right
// if, not => mover left = right; right = right*2
// if, yes => apply binaray search

// T: O(logN + logN) = O(logN) AND S:O(1)

function findEleOnSortedArrLenIsUndefinded(arr, target) {
    let left = 0;
    let right = 1;
    let index = -1;

    while (target > arr[right]) {
        left = right;
        right = right * 2;
        console.log(left, right)
      
    }
    let mid = left + parseInt((right - left) / 2);
    
   // console.log(mid, arr[mid], target)
    while (left <= right) {
        if (arr[mid] === target) {
           
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = parseInt((left + right) / 2);
    }

    return -1;
}

const result = findEleOnSortedArrLenIsUndefinded([1, 2, 4, 6, 8, 11, 13, 15, 17, 19, 22, 24, 26, 30], 22);
console.log(result)
