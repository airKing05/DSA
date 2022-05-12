

const squareRootBinarySearch = (num) => {
    let start = 0;
    let end = num;
    let mid = start + (end-start)/2;
    let ans = -1;
for(let i =0; i<num; i++){
    if(mid*mid==num){
        return mid
    }else if(mid*mid>num){
       end = mid -1
    }else{
        start = mid + 1
        ans = mid;
    }
    mid = start + (end-start)/2;
}
return ans
}

const num = 10000000000000000;
const result = squareRootBinarySearch(num);
console.log(result);