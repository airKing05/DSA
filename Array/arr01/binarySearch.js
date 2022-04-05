const binarySearch = (arr, key) => {
    let l = arr.length;
    let start = 0;
    let end = l;
    // let mid = (start + end) / 2;  
    // int can stor value up to {(2**31)-1}, so the normal formula will fail hear
    let mid = start + (end-start) / 2;
    for (let i = 0; i < l; i++) {
        if (key == arr[mid]) {
            return mid;
        }
        if (key > arr[mid]) {
            start = mid+1;
        } else {
            end = mid-1;
        }
        mid = start + (end-start) / 2;
    }
    return `number ${key} is not exit on [${arr}]` //-1
}

const arr = [1, 2, 3, 5, 6, 8];
const key = 3;

const result = binarySearch(arr, key);
console.log(result)