// L#4 912

//        [5,1,1,2,0,0]
//r     [1,1,5][0,0,2]   =>merge([1,1,5] [0,0,2])
//     [5,1,1]  [2,0,0]
//r    [1,1,5]  [0,0,2]
//   [5] [1,1]  [2] [0,0]
//r      [1,1]      [0,0]
//     [1] [1]      [0] [0]


// [1,1,5]    [0,0,2]
//  i          j       => arr1[i]<arr2[j] => newArr.push(arr[i]) else j
// i++         j++


// in all case
//T: O(NlogN) and S: O(N);




// helper function merger two sorted Arr
function merge(arr1, arr2) {
    //console.log(arr1, arr2)
    let len1 = arr1.length;
    let len2 = arr2.length;
    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < len1 && j < len2) {
        if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        } else {
            newArr.push(arr1[i]);
            i++;
        }
    }
    while (i < len1) {
        newArr.push(arr1[i]);
        i++;
    }
    while (j < len2) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}

// main function devide arr into two part and get two sorted array by recursion
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

  
    return merge(left, right);
}

const result = mergeSort([5, 1, 1, 2, 0, 0]);
console.log(result)