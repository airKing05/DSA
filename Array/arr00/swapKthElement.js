
function swapKthElement(arr, k) {
    let  l = arr.length;
    let temp;
    return [arr[k], arr[k*2]] = [arr[k*2], arr[k]]
    if(l<k){
        return "there is only one element on array"
    }else  if(l=2){
       return [arr[0], arr[1]] = [arr[1], arr[0]]
    }else {
      
    }
    
}

const arr = [1,2,3,4]
result = swapKthElement(arr, 1);
console.log(result);