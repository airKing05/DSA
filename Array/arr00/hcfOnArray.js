let arr = [3, 6, 8, 12];
let l = arr.length;
let mini = Math.min.apply(null, arr);
for (let i = 0; i < l; i++) {
    if (arr[i]%mini !==0){
        console.log(`hcf of[${arr}] is 1`)
        
    }
    // else{
    //     console.log(`${mini} is hcf of the array`)
    // }
}
