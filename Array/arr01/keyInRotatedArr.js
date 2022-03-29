const getPivot = (arr) => {
    let l = arr.length;
    let start = 0;
    let end = l - 1;
    let mid = start + (end - start) / 2;

    for (let i = 0; i < l; i++) {
        if (arr[mid] >= arr[0]) {
            start = mid + 1;
        } else {
            end = mid;
        }
        mid = start + (end - start) / 2;
    }
    return start
}

const binarySearch = (arr, s, e, key) => {
    let l = arr.length;
    let start = s;
    let end = e;
    let mid = start + (end - start) / 2;
    for (let i = 0; i < l; i++) {
        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] > key) {
            end = mid - 1;
        } else {
            start = mid + 1
        }
        mid = start + (end - start) / 2;
    }
    return -1;
}


const keyIndex = (arr, key) => {
    let l = arr.length;
    let end = l - 1
    const pivot = getPivot(arr);                   // getting pivot form the  keyInRotatedArr
    if (key >= arr[pivot] && key <= arr[end]) {    // search on second line or after pivot point
        return binarySearch(arr, pivot, end, key)  // binarySearch(arr, pivot==starting point of the line, end= end point, key)
    } else {                                         // search on first line or before pivot point
        return binarySearch(arr, 0, pivot - 1, key)
    }
}


const arr = [4, 5, 6, 7, 1, 2, 3];   // not working properly when changing the size of array
const key = 2;
const result = keyIndex(arr, key)
console.log(result);



// time complexity O(log n)