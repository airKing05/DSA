

let prefectArr = (arr) => {
    let len = arr.length;
    let i = 1;
    while (arr[i] > arr[i - 1] && i < len) {
        ++i;
    }
    while (arr[i] === arr[i - 1] && i < len) {
        ++i;
    }
    while (arr[i] < arr[i - 1] && i < len) {
        ++i;
    }
    console.log(len, i)
    return len === i
}

const array = [1, 2, 3, 3, 3, 1];

const result = prefectArr(array)
console.log(result);