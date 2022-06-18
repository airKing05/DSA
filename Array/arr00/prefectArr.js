
// worng answer
const prefectArr = (arr) => {
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] === arr[l - i - 1]) {
            return true
        } else {
            return false
        }
    }
}
const arr = [1, 2, 3, 2, 1, 2];
const result = prefectArr(arr);
console.log(result);