const closestNumber = (arr, key) =>{
    let l = arr.length;
    let start = 0;
    let end = l-1;
    let mid = start + ( end - start)/2;
    let ans = Math.max(...arr);
    while(start<= end){
        if(arr[mid] - key > 1){
            if(ans>=arr[mid] -key){
                ans = arr[mid]-key;
                return arr[mid]
            }
           end = mid - 1
        } else{
            start = mid + 1
        }
        mid = start + ( end - start)/2;
    }
}

const arr = [2,3,5,7,9, 10]
const key =4;
const result =  closestNumber(arr, key)
console.log(result);
