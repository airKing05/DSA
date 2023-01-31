const array = [101, 103, 10.5, 1006];

// remove 0
let newArr = [];

for (let i of array) {
    let char = i.toString();
    let newNum = parseFloat(char.split("0").join(""));
    newArr.push(newNum)
}

console.log(newArr)


// method-2
function removeZeroOfEle(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArr = [];
        let n = arr[i]
        while (n != 0) {
            let ele = n % 10;
            tempArr.push(ele);
            n = parseInt(n / 10);
        }
        console.log(tempArr);
        let tempLen = tempArr.length;
        let tempSum = 0;
        for (let k = 0; k < tempLen; k++) {
            let digit = tempArr.pop();

            // changing decimal to integer digit
            if (digit < 1 && digit > 0) {
                digit = digit * 10;
            }
            tempSum = tempSum + digit * (10 ** (tempLen - (k + 1)));

            // if got digit is 0 to removing it
            if (digit == 0) {
                tempSum = (tempSum / 10);
            }
            console.log(k, digit, tempSum)

        }
        newArr.push(tempSum)
    }

    return newArr;
}
const result = removeZeroOfEle([101, 103, 10.5, 1006]);
console.log(result)