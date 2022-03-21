const fascinatingNumber = (arr) => {
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] === arr[l - i - 1]) {
            return true
        } else {
            return false
        }
    }
}
const arr = [];
const result = fascinatingNumber(arr);
console.log(result);