// L#02
// find the first pair in the given array their sum is equal to zero
// in this array is sorted [-5,-3,-2, 0, 2, 4, 7]
// in this case time complexity is O(N) or quadratic

// id array is not sorted then,
// 1. sort the array O(NlogN)
// 2. apply two pointer approch and get index of elementes
// 3. find the original index from original array from the sorted array's elements
// 4. retun the indexes


function checkSumZero(arr) {
    let len = arr.length;
    let found = false;
    let start = 0;
    let end = len-1;
    while(start<end){
        //let sum = arr[start] + arr[end];
        if(arr[start] + arr[end] === 0){
            return [arr[start], arr[end]];
        } else if (arr[start] + arr[end] > 0){
            end--;
        }else{
            start++;
        }
        
    }
}

const array = [-5, -3, -2, 0, 2, 4, 7];
const result = checkSumZero(array);
console.log(result);



// case-2 if array is not sorted