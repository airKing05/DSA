// fascinatingNumber if 3 digit number after multiplying to 2 and 3 result disgit should me presenr in between 1-9, at leat one time



function bToD(arr) {
  let len = arr.length;
  let min = Math.min(...arr);
  let hcf = -1;
  for(let i =0; i<len; i++){
    if(arr[i]%min != 0){
      let hcf = 1
      return hcf
    }
    
  }
}
let array = [2,5,3,6];
const result = bToD(array);
console.log(result)