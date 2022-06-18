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