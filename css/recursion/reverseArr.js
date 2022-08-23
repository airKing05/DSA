let data = [3,5,7,9];

//let jsMethod = data.reverse();

let len = data.length;


function reverseArr(arr, start, end){
   if(start<=end){
       let temp = arr[start];
       arr[start] = arr[end];
       arr[end] = temp;
       reverseArr(arr, start+1, end-1);
       return arr
   }
}

const result = reverseArr(data, 0, len-1)
console.log(result)