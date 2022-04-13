// return true if 1-1, 2-2, 3-4, 6-3, else false


const uniqOccurrenceEle = (arr) => {
    let l = arr.length;
    let countArr =[];
    let start = 0
    for(let i= 1; i<l; i++){
       if(arr[start] == arr[i]){
          countArr.push(arr[start]*arr[i])
          console.log(2)
       }
       start++
    }
   return countArr;
}
const arr = [1,2,6, 3,2, 6,3,3, 6,3];
const result = uniqOccurrenceEle(arr);
console.log(result)