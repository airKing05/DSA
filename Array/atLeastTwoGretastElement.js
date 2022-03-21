// the task is to find all elements in array except two greatest elements in sorted order.


function atLeastTwoGretastElement(arr, k) {
   let sortedArr = arr.sort((a,b)=> a-b);
   let l = sortedArr.length-k;
   let newArr = [];
   sortedArr.splice(l,k)
//    for(let i=0; i<l; i++){
//        newArr.push(sortedArr[i])
//    }
   return sortedArr
}

const arr = [1,5,9,6,8,2]
result = atLeastTwoGretastElement(arr, 2);
console.log(result);