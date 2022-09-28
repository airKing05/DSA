//L#15,16
// bubbleSort optimized way ; reducing the array from end so the next itaration of loop will decerse

function bubbleSortOpt(arr){
let len = arr.length;
for(let i=len; i>0; i--){  // each time array length will decrese
    let isSwapped; // case2
    console.log(i)
    for(let j=0; j<i-1; j++){
        if(arr[j]>arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            isSwapped = true;
        }
    }
    if (!isSwapped) {
        break;   //case2
    } 
    
}
    return arr
};

const array1 = [3,2,5,1,6,8,4]; // noraml case
const array2 = [5,1,2,3,4] // only 5 is unsorted
const result = bubbleSortOpt(array2);
console.log(result)