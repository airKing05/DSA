// L#01
// find the first pair in the given array their sum is equal to zero
// [-5,-3,-2, 0, 2, 4, 7]
// in this case time complexity is O(N*2)

function checkSumZero(arr){
let len = arr.length;
let found  =  false
for (let i = 0; i < len; i++) {
  for(let j= i+1; j<len; j++){
    if(arr[i]+arr[j] === 0){
        found= true
       // console.log(arr[i], arr[j])
        return [arr[i], arr[j]]
    }
  }
}
return found
}

const array = [8, -5, -3, -2, 0,2, 3, 4, 1, 7]
const result = checkSumZero(array);
console.log(result)
