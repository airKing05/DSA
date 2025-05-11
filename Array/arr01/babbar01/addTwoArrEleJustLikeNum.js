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
    // reverse sumArr, yha pr glti kr di hai
   // const sortedSumArray =  sumArr.sort((a, b) => a-b)
   // for(let i=sumArr.length-1,)
return sortedSumArray.reverse();

};

let array1 = [1, 8, 3];
let array2 = [2, 6];
let result = addTwoArrEleJustLikeNum(array1, array2);
console.log(result)




//m1a

function addTwoArrEleJustLikeNum1(arr1, arr2) {
    let sumArr = []
    let i = 0;
    let j = 0;
    let len1 = arr1.length;
    let len2 = arr2.length;
    let carray = 0;
    let sumDigit = 0;


    while (i < len1 && j < len2) {
        sumDigit = carray + arr1[len1 - (i + 1)] + arr2[len2 - (j + 1)];
        let reminder = sumDigit % 10;
        sumArr.unshift(reminder);
        carray = parseInt(sumDigit / 10);
        i++;
        j++;
    }
    //console.log(i, j)

    // ydi phle arr1 bdi hai
    while (i < len1) {
        sumDigit = carray + arr1[len1 - (i + 1)];
        let reminder = sumDigit % 10;
        sumArr.unshift(reminder);
        carray = parseInt(sumDigit / 10);
        i++;
    }

    // ydi dusri arr2 bdi hai
    while (j < len2) {
        sumDigit = carray + arr2[len2 - (j + 1)];
        let reminder = sumDigit % 10;
        sumArr.unshift(reminder);
        carray = parseInt(sumDigit / 10);
        j++;
    }

    // ydi carray = 25, we also need to seprate that digit also;
    while (carray > 10) {
        sumDigit = carray
        let reminder = sumDigit % 10;
        sumArr.unshift(reminder);
        carray = parseInt(sumDigit / 10);
    }

    if (carray) {
        sumArr.unshift(carray);
        return sumArr;
    }
    return sumArr
}
const result1 = addTwoArrEleJustLikeNum1([121, 3], [129, 9]);
console.log(result1)






// m1b

let fn = (arr1, arr2) => {
    let len1 = arr1.length;
    let len2 = arr2.length;

    let i = 0;
    let j = 0;

    const sumArr = [];
    let power = 0;
    while (i < len1 || j < len2) {
        let arr1Last = arr1.pop() || 0;
        let arr2Last = arr2.pop() || 0;

        const lastDigitSum = power + arr1Last + arr2Last;
        // if (arr1Last == 0 && arr2Last == 0 && power > 0) {
        //   console.log(arr1Last, arr2Last, power)
        //   sumArr.unshift(power);
        // }

        power = 0;

        if (lastDigitSum >= 10) {
            const unitDigit = lastDigitSum % 10;
            sumArr.unshift(unitDigit);
            power = power + Math.floor(lastDigitSum / 10);
        } else {
            sumArr.unshift(lastDigitSum);
        }

        i++;
        j++;
    }

    if (power > 0) {
        sumArr.unshift(power);
    }
    return sumArr;
};

let array3 = [8];
let array4 = [9, 4, 5];


const resultM1b = fn(array1, array2)
console.log(resultM1b);