// L#05
// find the largest Sum Consecutive Digit
// take 4 number from array each time and add, then find maximum sum of these 4 number 
// in this case time complexity is O(N) or quadratic


function largestSumConsecutiveDigit(arr, num) {
    let len = arr.length;

    let max = 0
    if (len < num) {
        throw new Error("num should not be grater then the array length")
    }
    for (let i = 0; i < (len - num + 1); i++) {
        let sum = 0;
        for (let j = 0; j < num; j++) {
            console.log("i",i,"j",j)
            sum = sum + arr[i + j];  //arr[j] will pickup first 4 element each time of i value change i=0(0)(1)(2)(3)i=1(0)(1)(2)(3).....
                                     // (00)(01)(02)(03)(10)(11)(12)(13)(20)(21)(22)(23)(30)(31)...()
        }
        console.log(sum)
        if (sum > max) {
            max = sum
        }
    }
   return max

}

const array = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 9];
const number = 4
const result = largestSumConsecutiveDigit(array, number);
console.log("max sum",result)