let arr = [1,2,3,4,5, 8, 6,10];
let l = arr.length;

let max = arr[0];

for (let i=1; i<l; i++){
    if(arr[i]>= max){
        max=arr[i];
        
    }

}
console.log(max)