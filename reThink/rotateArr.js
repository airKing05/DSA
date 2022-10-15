// given a array rotated it K times

//m1
function rotateArr1(arr, numOfRotations){
    let len = arr.length;
    for(let i=0; i<numOfRotations; i++){
       
      arr.unshift(arr.pop())
    }
    return arr
}

const array = [1,2,3,4,5];
const result1 = rotateArr1(array, 3);
console.log("result1", result1);

//m2
function rotateArr2(arr, numOfRotations){
    let lastEle = arr.splice(arr.length - numOfRotations)
   // arr.length = arr.length - numOfRotations // if use slice method
    //return lastEle.concat(arr);

    for(let i=0; i<lastEle.length; i++){
        arr.splice(i, 0, lastEle[i])
    }

    return arr
}

const array1 = [1,2,3,4,5, 6, 7, 8];
const result2 = rotateArr2(array1, 3);
console.log("result2", result2);