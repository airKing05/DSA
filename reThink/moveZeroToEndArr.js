// coding chanllenge #05
// move all zeros to the end of the array


/// m1
function moveZeroToEndArr(arr){
  let len = arr.length;
  let zeroArr = [];
  for(let i=0; i<len; i++){
    if(arr[i]===0){
        let zeroEle = arr.splice(i, 1);
        zeroArr.push(...zeroEle);
    }
  }
  // console.log(zeroArr)
//   for(let i=0; i<zeroArr.length; i++){
//     arr.push(0);
//   }
  return arr.concat(zeroArr);
};

//const array = [0,3,2,0,1,5];
//const array = [3,2,1,5];
//const array = [];
const array = [3,2,1,5, 0, 0];
//const result = moveZeroToEndArr(array)
//console.log("result1",result)


//m2
function moveZeroToEndArr2(arr){
  let len = arr.length;
  let zeroCount = 0;
  for(let i=0; i<len; i++){
    if(arr[i]===0){
        zeroCount ++
        let zeroEle = arr.splice(i, 1);
         i--;
    }
  }
  for(let i=0; i<zeroCount; i++){
    arr.push(0);
  }
  return arr
};


const result2 = moveZeroToEndArr2(array)
console.log("result2", result2)

// m3

function moveZeroToEndArr3(arr){
  let len = arr.length;
  for(let i=0; i<len; i++){
    arr[i] === 0 && arr.splice(i, 1) && arr.push(0)
  }
  return arr;
 
};


const result3 = moveZeroToEndArr3(array)
console.log("result2", result3)
