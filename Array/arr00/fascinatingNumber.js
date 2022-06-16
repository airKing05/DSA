// fascinatingNumber, if 3 digit number after multiplying to 2 and 3 result digit should me present in between 1-9, at least one time



function isFascinatingNumber(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (parseInt(arr[i]) == i + 1) {
            return true
        }
        else {
            return false
        }
    }
}

// function for basic condition
const fascinatingNumber = (num) => {
    let temp = num.toString();
    let multyBy2 = (num * 2).toString();
    let multyBy3 = (num * 3).toString();
    temp = temp.concat(multyBy2, multyBy3);
    let arr = Array.from(temp).sort();

    // now check the array isFascinatingNumber or not
    return isFascinatingNumber(arr);
}
const number = 125; // 192,  123- true
const result = fascinatingNumber(number);
console.log(result);






// const fascinatingNumber = (arr) => {

//     let l = arr.length;
//     for (let i = 0; i < l; i++) {
//         if (arr[i] === arr[l - i - 1]) {
//             return true
//         } else {
//             return false
//         }
//     }
// }