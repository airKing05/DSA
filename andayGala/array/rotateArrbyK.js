// l#12 189

// rotate the array to the right by k steps, where k is non-negative
//Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

// m1
// splice
function rotateArrbyK(arr, k) {
    let sliceArr = arr.splice(k + 1);
    //console.log(sliceArr, arr)
    let newArr = sliceArr.concat(arr);
    return newArr;
}
const result = rotateArrbyK([1, 2, 3, 4, 5, 6, 7], k = 3);
console.log(result);


// m2
// pop
function rotateArrbyK2(arr, k) {
    for (let i = k + 1; i < arr.length; i++) {
        let ele = arr.pop();
        arr.unshift(ele)
    }
    return arr;
}
const result2 = rotateArrbyK2([1, 2, 3, 4, 5, 6, 7], k = 3);
console.log(result2);


// m3 
// reverse arr
// T: O(N) S:O(1);

function rotateArrbyK3(arr, k) {
    let len = arr.length;
    arr.reverse();
    let i = k;
    while (i < len) {
        [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
        i++;
    }
    return arr;
}
const result3 = rotateArrbyK3([1, 2, 3, 4, 5, 6, 7], k = 3);
console.log(result3);


//// m4
// reverse arr
// T: O(N) S:O(1);

function revArr(arr, start, end) {

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
    return arr;
}
function rotateArrbyK4(arr, k) {
    k = k % arr.length;
    arr.reverse();

    revArr(arr, 0, k - 1);
    revArr(arr, k, arr.length - 1);


    return arr;
}
const result4 = rotateArrbyK4([1, 2, 3, 4, 5, 6, 7], k = 3);
console.log(result4);
