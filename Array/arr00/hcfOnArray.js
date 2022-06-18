
function hcfOnArray(arr) {
    let len = arr.length;
    let min = Math.min.apply(null, arr);
    //let min = Math.min(...arr);
    let hcf = min
    for (let i = 0; i < len; i++) {
        if (arr[i] % min != 0) {
            return hcf = 1
        }
    }
    return hcf;
}
let array = [2, 12, 24, 6];
const result = hcfOnArray(array);
console.log(result)




// for (let i = 0; i < l; i++) {
//     if (arr[i]%mini !==0){
//         console.log(`hcf of[${arr}] is 1`)
        
//     }
//     else{
//         console.log(`${mini} is hcf of the array`)
//     }
// }
