const linearSearch = (arr, key) => {
    let len = arr.length;
    let start = 0;
    let end = len-1
    for (let i = 0; i < len; i++) {
       let mid = start + (end-start)/2;
       if(key===arr[mid]){
        return mid
       }else if(key> arr[mid]){
        start = mid+1
       }else{
        end = mid -1
       }
    }
}
let arr = [1,3,6,8,10,14,26];
let key = 1;
let result = linearSearch(arr, key);
console.log(result);