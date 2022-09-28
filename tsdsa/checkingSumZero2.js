// L#02
// find the first pair in the given array their sum is equal to zero
// in this array is sorted [-5,-3,-2, 0, 2, 4, 7]
// in this case time complexity is O(N) or quadratic

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