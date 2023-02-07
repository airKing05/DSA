// l#2

// arr = [-1, 0, 1, -1, 2, -4] target = 0
// output =[ [-1, 0 ,1], [-1, -1, 2]]

// find the sum of three elements is equal to the targets
// approch- 1.brout fourch approch in Array/arr01/babbar01
// 2. a-sort arr
//    b-apply three pointer
//    i    j              k
// [ -4, {[-1, -1, 0, 1, 2]}]
// target1 = arr[i]*-1
// apply two pointer approch on array from "j to k"
// if arr[i]+ arr[k] == target1
// return [target1*-1, arr[j], arr[k]]
// j++; k--; go on fot the next pairs
// if j>k then i++; j=i+1; k=len-1
//T: O(N*2) S:O(N) => creating the n type target1 also array 


function checkSum3EqaulTarget(arr, t) {
    let len = arr.length;
    arr.sort((a, b) => a - b);

    let outputArr = []
    let i = 0;
    while (i < len) {
        let left = i + 1; //j
        let right = len - 1; //k

        let target1 = arr[i] * -1;
     
        while (left < right) {
            let pair = [];
            let sum = arr[left] + arr[right];
            //console.log(target1, sum, arr[left], arr[right])

            if (sum == target1) {
                pair.push(target1 * -1, arr[left], arr[right]);

                   // for the edge cases-----
                if (arr[right] === arr[right - 1]) {
                  
                    right = right + 2;
                }
                if (arr[left] === arr[left + 1]) {

                    left = left + 2;
                }
                //--------
                left++;
                right--;
            } else if ((sum > target1)) {
                // if(arr[right] === arr[right-1]){
                //     right = right+2;
                // }
                right--;
            } else {
                // if (arr[left] === arr[left + 1]) {
                //     left = left + 2;
                // }
                left++;
            }

             // for the edge cases -------
            if (pair.length > 0) {
               
                outputArr.push(pair)
            }
             // for the edge cases ------
        }
        
        if(arr[i] === arr[i+1]){
            i=i+2;
        }
        i++;
    }

    return outputArr
}

const result = checkSum3EqaulTarget([-2,0,0,2,2], 0);
// [-1, 0, 1, -1, 2, -4] => [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(result)




//m-1a code spliting
function twoSumArr(target, j, arr){
    let len = arr.length;
    let k = len-1;
    let pair = [];
    while (j < k) {
        let leftValue = arr[j];
        let rightValue = arr[k];
        let sum = leftValue + rightValue;

        if (sum == target) {
            pair.push([(target * -1), leftValue, rightValue]);
             // for the edge cases ------
            while(j<k && arr[j] ===arr[j+1]) j++;
            while(j<k && arr[k] ===arr[k-1]) k--; 
             // for the edge cases ------
            j++;
            k--;
        } else if ((sum > target)) {

            k--;
        } else {

            j++;
        }
    }
    return pair;
}

function checkSum3EqaulTarget1(arr, t) {
    let len = arr.length;
    arr.sort((a, b) => a - b);
    let outputArr = []
    
   for(let i = 0; i<len; i++) {
        if(arr[i] === arr[i-1]) continue;
        let target1 = arr[i] * -1;
       let subArr = twoSumArr(target1, i+1, arr)
       outputArr.push(...subArr);
    }

    return outputArr
}

const result1 = checkSum3EqaulTarget1([-1, 0, 1, -1, 2, -4], 0);
// [-1, 0, 1, -1, 2, -4] => [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(result1)