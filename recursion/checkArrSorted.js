function isSorted(arr, len) {
    if (len == 0 || len == 1) {
        return true;
    }
    if (arr[0] > arr[1]) {
        //console.log(arr[0])
        return false;
    }
    arr = [parseInt(arr+1)];
    console.log(arr)
    len = len-1
   
   
    let remainingArr = isSorted(arr, len);
   // console.log(remainingArr)
    return remainingArr;
    

};
const arr = [1, 2, 4, 5, 6, 7, 9];
let len = arr.length;
let result = isSorted(arr, len);

if(result){console.log("sorted")}
else{console.log("not sorted")}