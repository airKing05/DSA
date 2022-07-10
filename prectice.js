// 



function bToD(arr, k) {
    let len = arr.length;
    let temp = []
    for(let i =0; i<len; i++){
     let newPosition = (i+k)%len;
     temp[newPosition] = arr[i];
    }
    return arr = temp
}
let array1 = [2, 3, -4, 5, 6, 7, 8]

const result = bToD(array1, 2);
console.log("result",result) 