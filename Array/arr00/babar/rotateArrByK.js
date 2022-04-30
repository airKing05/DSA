// arr [1,5,-3, 4]=>by k=2 => [-3, 4, 1, 5]

const rotateArrByK = (arr, k) => {
    let l = arr.length;
    let temp= [];
   for(let i =0; i<l; i++){
       temp[(i+k)%l] = arr[i];
       console.log( temp[(i+k)%l]= arr[i])
   }
   arr = temp;
    return arr
}

let rotateAt =  3;
let arr = [1,5, 3, 4];
let result =  rotateArrByK (arr,);
console.log(result)