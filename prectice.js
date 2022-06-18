// reverse array



function bToD(arr, k) {
  let len = arr.length;
 for (let i=0; i<len; i++){
  [arr[k], arr[k*2]] = [arr[k*2], arr[k]]
 }
return arr;
}
let array = [1, 3, 2, 4,12, 5,1,3, 0];
const result = bToD(array, 2);
console.log(result)