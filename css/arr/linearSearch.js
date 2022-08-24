const linearSearch = (arr, key) => {
    let len = arr.length;
    let bool = false
    for (let i = 0; i < len; i++) {
       if(key===arr[i]){
          bool = true
       }
    }
   return bool
}
let arr = [2, 6, 3, 8, 1, 9];
let key = 8;
let result = linearSearch(arr,key);
console.log(result);