// 
dsdsd
console.log('aaa');

function bToD(arr) {
    let len = arr.length;
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(arr[j]>=arr[j+1]){
               let temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
               console.log(arr)
            }else{
                continue;
                
            }
        }
    }
    return arr;
}
let array1 = [10, 3, 9, 7, 8]

const result = bToD(array1);
console.log("result",result) 
