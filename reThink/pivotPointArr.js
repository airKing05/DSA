//Coding Challenge #9: 
//Find the Pivot element of the Array
// pivot element index is, left side element is and right side element ara equal.


function pivotPointArr(arr){
    let len = arr.length;
    let start = 0;
    let end =  len-1;
    let leftSum = 0;
    let rightSum =0;

    for(let i=0; i<len; i++){
        if(start == end && leftSum === rightSum){
            return arr[start]
        }
        if(start ==  end){  // when sum is not equal
            return -1
        }

        if(leftSum>rightSum){
            rightSum = rightSum + arr[end];
            end--;
        }else if(leftSum<rightSum){
            leftSum = leftSum + arr[start];
            start++;
        }else{
            // leftSum == rightSum but start !== end
            // so ether we could increase leftSum or ether right sum

             rightSum = rightSum + arr[end];
             end--;
          
        }
    }
}


const array = [1,2,0,2,1,3]
const result = pivotPointArr(array);
console.log(result)