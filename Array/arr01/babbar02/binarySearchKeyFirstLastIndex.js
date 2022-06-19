// left index occrence
// also find total number of accrance of key
// this is also not working

const binarySearchFirstIndex = (arr , k) => {
let l = arr.length;
let start = 0;
let end = l-1;
let mid = start+(end-start)/2;
let ans = -1;
while(start<=end){
    if(arr[mid]==k){
        ans = mid;
        end = mid -1
    } else if(k>arr[mid]){
        start = mid+1;
    }else {
        end = mid -1;
    }
    mid = start+(end-start)/2;
}
return ans;
}

// for the last index
const binarySearchLastIndex = (arr , k) => {
    let l = arr.length;
    let start = 0;
    let end = l-1;
    let mid = start+(end-start)/2;
    let ans = -1;
    while(start<=end){
        if(arr[mid]==k){
            ans = mid;
            start = mid + 1
        } else if(arr[mid]>k){
            end = mid -1;
        }else {
            start = mid+1;
        }
        mid = start+(end-start)/2;
    }
    return ans;
    }

const arr = [1,2,3,3,7];
const key = 3;
const firstIndex = binarySearchFirstIndex(arr, key);
const lastIndex = binarySearchLastIndex(arr, key);
const totalOcc = lastIndex-firstIndex+1
console.log(firstIndex, lastIndex, totalOcc)