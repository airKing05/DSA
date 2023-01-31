let arr = [1,3,2,4];
let l = arr.length;
let revArr =[]

for (let i=l-1; i>=0; i--){
    revArr.push(arr[i]);
}
console.log(revArr); 


// method-2 by while loop
function reverseArr(arr) {
let left = 0;
let right = arr.length - 1;
while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
}
return arr;
}
const result = reverseArr([101, 103, 10.5, 1006]);
console.log(result)