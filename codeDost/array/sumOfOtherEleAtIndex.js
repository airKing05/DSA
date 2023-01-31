// sum array's other elements at the perticular index;
// input = [2,7,11,4,-2]
// output = [20,15,11,18,24];

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
};

function sumOfOtherEleAtIndex(arr) {
    let len = arr.length;
    let newArr = [];
    for (let i = 0; i < len; i++) {
        let chunk0 = arr.slice(0, i);
        let chunk1 = arr.slice(i + 1);
        //console.log(chunk0, chunk1);
        let sum = getSum([...chunk0, ...chunk1]);
        newArr.push(sum);
    }
    return newArr;
};

// const performanceStart1 =  performance.now()
// const result = sumOfOtherEleAtIndex([2, 7, 11, 4, -2]);
// console.log(result)
// const performanceEnd1 = performance.now()

// console.log("m1 time",performanceEnd1- performanceStart1)

// let arr = [2, 7, 11, 4, -2];
// let arr1 = arr.splice(3,1);

// console.log(arr1, arr)




// m2
function sumOfOtherEleAtIndex1(arr){
let len = arr.length;
let sum = 0;
let newArr = [];
for(let i=0; i<len; i++){
    sum = sum +arr[i];
};
for(let i=0; i<len; i++){
    let newEle = arr[i];
    newArr.push(sum-newEle);
}
return newArr;
}
// const performanceStart2 = performance.now()
// const result1 = sumOfOtherEleAtIndex1([2, 7, 11, 4, -2]);
// console.log(result1)
// const performanceEnd2 = performance.now()

// console.log("m2 time",performanceEnd2 - performanceStart2);



//m3 
function sumOfOtherEleAtIndex2(arr){
    let len = arr.length;
    let leftSumArr = [];
    let rightSumArr = [];
    let leftEle  = arr[0];
    let rightEle = arr[len-1];

    for(let i= 0; i<len; i++){
        leftSumArr[i] = leftEle + arr[i+1];
    }
    console.log(leftSumArr)
}
//const performanceStart2 = performance.now()
const result2 = sumOfOtherEleAtIndex2([2, 7, 11, 4, -2]);
console.log(result2)
//const performanceEnd2 = performance.now()

//console.log("m2 time", performanceEnd2 - performanceStart2);