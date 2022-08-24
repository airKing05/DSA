
let key = 28;
let has = false
let position = undefined;
function linearSearch(arr, start, end){
     mid = Math.floor((end + start) / 2);
    
    if (arr[mid]===key) {
        position = mid;
        return has = true
    } else if (key > arr[mid]) {
        linearSearch(arr, mid + 1, end);
    } else {
        linearSearch(arr, start, mid - 1);
    }
   return has
}
let arr = [1, 3, 6, 8, 10, 14, 26];

let len = arr.length;
let start = 0;
let end = len - 1;

let result = linearSearch(arr, start, end);
console.log(result);
console.log(position)