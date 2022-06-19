// need to reverse a array after the index of M;
const reverseArrM = (arr, m) =>{
 let l = arr.length;
 let start = m+1;
 let end = l-1;
 for(let i=m; i<l/2; i++){
     [arr[start], arr[end]] = [arr[end], arr[start]]
     start++;
     end--
 }
 return arr
};

let indexAfter = 2;
let arr = [3,5,2,7,4,6,10];
let result = reverseArrM(arr, indexAfter);
console.log(result)
