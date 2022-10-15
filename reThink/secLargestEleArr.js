// coding chanllenge #04

// find the second largest element from a give array

function secLargestEleArr(arr){
let len = arr.length;
let max = arr[0];
let secEle = Math.min(...arr);

for(let i=0; i<len; i++){
    if(arr[i]>max){
        secEle = max
        max = arr[i]; 
    }else if(arr[i]>secEle && arr[i] !== max){
       secEle = arr[i]
    }
}
return secEle;
}

//const array = [2,4,3,6,8,11, 10, 12,0,24, -2]
const array = [-1,-2,-3]
const result = secLargestEleArr(array);
console.log(result);