// check the element present in the array ara palindrome

function palindromicNumber(arr) {
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        let num = arr[i];
        let rev = 0;
        while (num) {
            rev = rev * 10 + num % 10;
            num /= 10;
        }
        if (rev !== arr[i])
            return 0;
    }
    return 1;

}

const arr = [111, 222, 444]
result = palindromicNumber(arr);
console.log(result);


//m2
const palindromicNumber1 = arr => {

    let newArr = [];

    let palidrome = false;
    for (let i = 0; i < arr.length; i++) {

        let ele = arr[i].toString();
        //console.log(ele)

        let left = 0
        let right = ele.length - 1;

        while (left < right) {
            //console.log(ele[left], ele[right])
            if (ele[left] != ele[right]) {

                palidrome = false;
            } else {
                palidrome = true;
            }
            left++
            right--;
        }
        if (palidrome == true) {
            // console.log(arr[i])
            newArr.push(arr[i])
        }
    }
    return newArr;
}

const result1 = palindromicNumber1([111, 123, 222, 444, 345, 121]);
console.log(result1)



//m3
// by javaScript method
// function bToD(arr) {
//     arr.forEach((element, index, arr) => {
//         let temp = element.toString();
//         let reverseElement = temp.split("").reverse().join("");
//         if (temp === reverseElement) {
//             console.log("true")
//         }
//     });
// }