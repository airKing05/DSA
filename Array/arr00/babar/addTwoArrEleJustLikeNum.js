// add two array's element just like assuming them numbers
// three case possible
// case-1 l1>l2   1 2 3 + 6 = 129 ; how could handle 1, 2 from arr1
// case-2 l1<l2   6 + 1 2 3 = 129 ; how could handle 1, 2 from arr2
// case-3 l1=l2   9 9 + 9 9 = 198 ; how could handle carry

const addTwoArrEleJustLikeNum = (arr1, arr2) => {
    let l1 = arr1.length;
    let l2 = arr2.length;
    let sumArr = [];
    let carry = 0;
    let i = l1 - 1;
    let j = l2 - 1;
    while (i >= 0 && j >= 0) {
        let value1 = arr1[i];
        let value2 = arr2[j];
        let sum = value1 + value2 + carry;
        carry += Math.floor(sum / 10);
        sum = sum % 10
        sumArr.push(sum);
        console.log(sum, carry, sumArr)
        i--;
        j--;
    };

    // first case
    while(i>=0){
        let sum = arr1[i] + carry;
        carry += Math.floor(sum / 10);
        sum = sum % 10
        sumArr.push(sum);
       
        i--;
    };

    // second case
    while(j>=0){
        let sum = arr2[j] + carry;
        carry += Math.floor(sum / 10);
        sum = sum % 10
        sumArr.push(sum);
       
        j--;
    }

    // third case (when receiving carry from the addition of value1+value2)
    while(carry!=0){
        let sum = carry;
        carry += Math.floor(sum / 10);
        sum = sum % 10
        sumArr.push(sum);
        
    }
    // reverse sumArr
   const sortedSumArray =  sumArr.sort((a, b) => a-b)
return sortedSumArray;

};

let array1 = [1, 8, 3];
let array2 = [2, 6];
let result = addTwoArrEleJustLikeNum(array1, array2);
console.log(result)