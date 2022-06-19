const magicalNumber = (arr, n) => {
    let l = arr.length;
    let start = 0;
    let end = l-1;
    let mid = start + (end -start)/2;
    let ans = -1;
    for (let i = 0; i<l; i++){
        if(arr[i]==mid){
           ans = mid;
        }else if(n>mid){
            start = mid +1;
        }else{
            end = mid - 1
        }
        mid = start + (end -start)/2;
    }
   return ans; 
};

const arr = [1,2,4,5,6,9, 10];
const number = 4;
const result = magicalNumber(arr, number);
console.log(result);