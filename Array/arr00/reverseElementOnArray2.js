const reverseArr = (arr) =>{
   let l = arr.length;
   let start = 0;
   let end = l-1
   for(let i = 0; i<l/2; i++){  // l/2 hi lenge kyoki nahi to wapis se swap ho jayenge elements
     console.log( [arr[start], arr[end]] = [arr[end], arr[start]])
      start++;
      end--;
   } 
   return arr
};

const array =[2,4,5,6,7, 8];
const result = reverseArr(array);
console.log(result)



// by pop and push method
function reverseByPopPush(arr) {
   let len = arr.length;
   let i = 0;
   let newArr = []
   while (len > i) {
      let lastElement = arr.pop();
      newArr.push(lastElement);
      i++;
   }
   return newArr;
}


const resultReverseByPopPush = reverseByPopPush(array);
console.log("resultReverseByPopPush", reverseByPopPush)