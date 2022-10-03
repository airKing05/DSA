//L#06
// chunked arr n=3
// [1,2,3,4,5,6,7,8] => [[1,2,3],[4,5,6],[7,8]]

// m1 => by slice method
function chunkedArr(arr, num){
    let len = arr.length;
    let newArr = [];
    for(let i=0; i<len; i+=num){
        let chunkArr = arr.slice(i, i+num);
        newArr.push(chunkArr)
    }
  return newArr;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let ChunkNumber = 3;
const result1 = chunkedArr(array, ChunkNumber);
console.log("result1", result1);



//m2 => by reduce method

let ChunkNumber2 = 2;  // number of item per chunk array

const result2 = array.reduce((resultArr, currItem, index) => {
      let chunkIndex = Math.floor(index/ChunkNumber2);
      //chunkIndex 00, 11, 2

      if(!resultArr[chunkIndex]){
        // chunkIndex is not inside resultArr, assigned new  = []
          resultArr[chunkIndex] = [];
      }

      //  // chunkIndex is exist in resultArr, push currentItem into, innerArr of chunkIndex  
      resultArr[chunkIndex].push(currItem);
      return resultArr;
}, []);

console.log("result2", result2); // result: [['a','b'], ['c','d'], ['e']]


// m3 

// created an empty array 
// get the last chunked array within last = "chunked"
// check if last exis OR size last is equals to number if it does exit then push into "chunked" else push into last
// retunr chunked

function chunkedArr3(arr, number){
  const chunked = [];
  for(let ele of arr){
    let last = chunked[chunked.length-1];

    if(!last || last.length === number){
        chunked.push([ele]);
    }else{
        last.push(ele)
    }
  }
  return chunked;
};

const result3 = chunkedArr3(array, 3);
console.log("result3", result3)