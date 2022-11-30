//L#10
// find odd an even number by recursion technique

// let i = 0;
// let oddArr = [];
// function oddEvenRecursion(arr){

// let len = arr.length;


//  if(i<len){
//      if (arr[i] % 2 === 0) {
//          //console.log(arr[i], "even");
//          i++;
//          oddEvenRecursion(array);   
//      } else {
//         oddArr.push(arr[i]);
    
//          i++;
//          oddEvenRecursion(array);
//      }
//  }
// }

// const array = [1,3,4,5,6,7,8];
// oddEvenRecursion(array);
//  console.log(oddArr)







//+++++++++++++++++++++++++++++++++++++++++
// recurcive halper function
// here isOdd fucntion is helper function

function oddArrRecursion(arr) {
    let oddArr1 = [];
   
    
    function isOdd(inputArr){
       let len = inputArr.length;
        if (len > 0 ){
            if (inputArr[0] % 2 !== 0) {
                oddArr1.push(inputArr[0]);
            }
            isOdd(inputArr.slice(1));
        } 
    }
    isOdd(arr);
    return oddArr1
}

const array1 = [1,2, 3, 4, 5, 6, 7, 8];
const result = oddArrRecursion(array1);
console.log(result)