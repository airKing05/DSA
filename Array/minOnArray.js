let arr = [1,2,3,4,5, 8, 6,10,0];
let l = arr.length;

let min = arr[0];

for (let i=1; i<l; i++){
    if(arr[i]<= min){
        min=arr[i];
        
    }

}
console.log(min)