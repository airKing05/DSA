// fascinatingNumber, if 3 digit number after multiplying to 2 and 3 result digit should me present in between 1-9, at least one time


//After multiplication with 2 and 3, and concatenating with original number, resultant number is 192384576 which contains all digits from 1 to 9.



function fascinatingNumber(num) {
    let product2 = (num * 2).toString();
    let product3 = (num * 3).toString();

    let newNum = (num + product2 + product3);
    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let obj = {};
    for (let key of newNum) {
        obj[key] = (obj[key] || 0) + 1;
    }

    let isFsinating = true;

    if (Object.keys(obj)[0] == 0) {
        console.log("oth key", Object.keys(obj)[0])
    }
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let key = Object.keys(obj)[i];
        let value = Object.values(obj)[i];

        if (key != numArr[i]) {
            // console.log(key, numArr[i])
            isFsinating = false;
        }
        if (value > 1) {
            // console.log(value)
            isFsinating = false;
        }
        //console.log("key",key, value)
    }
    return isFsinating;
}

const result = fascinatingNumber(192)
console.log(result)

function isFascinatingNumber(arr) {
    let len = arr.length;
    let map = {};
   
//     //    if (map[key] > 1){
//     //     //console.log(key, map[key])
//     //     return false
//     //    }
//     if()
//        console.log(key)
//    }

    for(let i =1; i<=9; i++){
        if (map[i] === undefined){
           // console.log(map[i] + " " + i)
            return false;
        } else if (map[i] > 1){
            //console.log(map[i], i)
            return false;
        }else{
           return true;
        }
           
    }

   // console.log(map, map.length)
   
}

// function for basic condition
const fascinatingNumber = (num) => {
    let temp = num.toString();
    let multyBy2 = (num * 2).toString();
    let multyBy3 = (num * 3).toString();
    temp = temp.concat(multyBy2, multyBy3);
    let arr = Array.from(temp).sort();
  console.log(temp)
    // now check the array isFascinatingNumber or not
    return isFascinatingNumber(arr);
}
const number = 192; // 192,  123- true
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