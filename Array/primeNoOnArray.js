let arr = [1,3,2,4];
let l = arr.length;
let primeArr = [];

for (let i=0; i<l; i++){
  if(arr[i]%2==0){
    console.log(`${arr[i]} is not a prime number`)
  }
}
