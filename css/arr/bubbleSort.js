const  bubbleSort = (arr) =>{
   let len = arr.length;
   for (let i=0; i<len; i++){
    for (let j=0; j<len; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1] = temp;
            console.log(arr);
        }else{
           
            continue;
        }
    }
   }
   return arr;
}
let arr = [2,6,3,8,1,9];
let result = bubbleSort(arr);
console.log(result);
