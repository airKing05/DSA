//L#06
//search Element by Divide and Conquere method or binaray serach
// work only when array is sorted
// time complexity is binary O(logN)

function searchEleDivideConquere(arr, key) {
    let len = arr.length;
    let start = 0;
    let end = len;
    let mid = parseInt((start+end)/2);
    
    while (start <= end) {
        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] > key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = parseInt((start + end) / 2);
    }
    return -1;
}

const array = [1, 2, 3, 5, 7, 9, 11, 34, 56];
const number = 1;
const result = searchEleDivideConquere(array, number);
console.log(result);