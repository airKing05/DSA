let arr = [1,2,3,4,5, 8, 6,10,0];
let l = arr.length;

let min = arr[0];

for (let i=1; i<l; i++){
    if(arr[i]<= min){
        min=arr[i];
        
    }

}
console.log(min)


// by using foreach loop min and max value of array
// function bToD(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     arr.forEach((element, index, arr) => {
//         if (arr[index] >= max) {
//             max = arr[index]
//         }
//         if (arr[index] <= min) {
//             min = arr[index]
//         }
//     });
//     return { max, min }
// }
// let array = [1, 2, 3, 4, 5, 8, 6, 10, 0, -4];
// const result = bToD(array);
// console.log(result)