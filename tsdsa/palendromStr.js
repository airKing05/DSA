//L#20
// palendrom => noon == noon
// check given number or string is palendrom or not
//  O(n) will take more time with respected to the anyohter algorithm

const palendrom = (str) => {
    //    const newStr = str.split("").reverse().join("")
    //    isPalendrom = true;
    //   str === newStr ? isPalendrom : isPalendrom= false
    //  return isPalendrom;
    str = str.toString();
    let left = 0;
    let len = str.length;
    let right = len - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        } else {
            return true;

        }
        left++;
        right--;
    }

};

const string = "noon";
const result = palendrom(string);
console.log(result)