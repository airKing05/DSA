// L#1 912
// Input: nums = [5, 2, 3, 1]
// Output: [1, 2, 3, 5]

// worst algorithem for sorting
//T: O(N*N) and S: O(1) 

function bubbleSorting(arr){
let len = arr.length;
let swap = true;
let count = 0;

while(swap){
    swap = false;
    for(let j = 0; j<len-count; j++){
        if(arr[j]>arr[j+1]){
            [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
            swap = true;
        }
    }
    count++;
}
return arr;
}
const result = bubbleSorting([5, 2, 3, 1]);
console.log(result)