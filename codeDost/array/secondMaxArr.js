// find the second max in array
// [1,4,2,6,4,7,8,1,8] => 7 not 8

function secondMax(arr) {
    let len = arr.length;
    let max = arr[0];
    let secondMax = arr[0];
    for (let i = 1; i < len; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i]
        }
        if (arr[i] > secondMax && arr[i]<max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
const result = secondMax([1, 4, 2, 6, 4, 7, 12, 1, 8, 12])
console.log(result)