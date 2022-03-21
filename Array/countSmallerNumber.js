// num thous are lesser then the x value or equal 

function countSmallerNumber(arr, x) {
    let  l = arr.length;
    // let sArr = [];
    let count = 0;

    for (let i = 1; i<l; i++) {
       if(arr[i]<=x){
           count ++
        //    sArr.push(arr[i])
       }
    }
    // let sLen = sArr.length;
    return count
   
}

const arr = [1, 2, 3, 4, 5, 6,8,11]
result = countSmallerNumber(arr, 10);
console.log(result);