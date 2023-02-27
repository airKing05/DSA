//L#5  912

// Input: nums = [5, 1, 1, 2, 0, 0]
// Output: [0, 0, 1, 1, 2, 5]


// partialy sort
//T: O(NlogN) and S: O(1);

// worst case
//T: O(N*N) and S: O(1) 

function pivotIndex(arr, left, right) {
    let p = right;
    let j = left;
    let i = left - 1;

    while (j <= p) {
        if (arr[j] < arr[p]) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        } else {
            j++;
        }
    }
    i++;
    [arr[i], arr[p]] = [arr[p], arr[i]];

    console.log("i",i)
    return i;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pIdx = pivotIndex(arr, left, right);
        quickSort(arr, left, pIdx-1);
        quickSort(arr, pIdx+1, right);
    }

    return arr;
}


const result = quickSort([5, 1, 1, 2, 0, 0]);
console.log("result", result);