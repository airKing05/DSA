console.log("L#24, selection sort to arr")
//"L#24, selection sort to arr"
// compair fitst element of arr to each element of arr and replace with smallest element
// [20, 12, 53, 3]; 20
// [3, 12, 53, 20]; 12 
// [3, 12, 53, 20]; 53
// [3, 12, 20, 53];

const selectionSort = (arr) => {
    let len = arr.length;
    let minIndex;
    for (let i = 0; i < len; i++) {
        let minIndex = i;          // storing min value index of arr
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                console.log(arr)
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp
    }
    return arr
};

const array = [20, 12, -53, 3];
let result = selectionSort(array)
console.log(result)