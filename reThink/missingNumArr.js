// Coding Challenge #03

// fint the missing number in sorted arr

// m1
function missingNumArr(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let missEle = [];
    for(let i=min; i<max; i++){
      if(arr.indexOf(i)<0){
        missEle.push(i)
      }
    }
  return missEle
}
const array = [1, 2, 5, 7];
const result1 = missingNumArr(array);
//console.log("result1", result1); 


//m2

function getArr(diff, currEle){
        let item = []
        while(diff > 1){
           item.push(++currEle);
           diff--;
        }
        console.log("item",item)
       // missEle.splice(i, 0, ...item)
       return item
}
function missingNumArr2(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let missEleArr = [];
    for(let i=min; i<max; i++){
      if(arr[i+1] - arr[i]>=2){
         let diff = arr[i+1] - arr[i];
         console.log(diff, arr[i], i);
        let missEle =  getArr(diff, arr[i]);
        missEleArr.splice(i+1, 0, ...missEle)
         
      }
    }
  return missEleArr
}

const result2 = missingNumArr2(array);
console.log("result2", result2); 