// pivot element is an element who has least value is roateted array;

const pivotElementInRotatedArr = (arr) => {
    let l = arr.length;
    let start = 0;
    let end = l - 1;
    let mid = start + (end - start) / 2
    while (start<end) {
        if (arr[mid] >= arr[0]) {
            start = mid + 1;
        } else {
            end = mid;
        }
        mid = start + (end - start) / 2
    }
    return start;

}
const arr = [4, 6, 8, 9,10,11,1, 2, 3]; // not working when change the size of array
                                        // only working when size of array is even
const result = pivotElementInRotatedArr(arr);
console.log(result);