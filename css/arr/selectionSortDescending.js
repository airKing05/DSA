console.log("L#25, selection sort to arr")
//"L#25, selection sort to arr"
// O(n*2) will take more time with respected to the anyohter algorithm


const selectionSort = (arr) => {
    let len = arr.length;
    let maxIndex;
    for (let i = 0; i < len; i++) {
        let maxIndex = i;          // storing min value index of arr
        for (let j = i + 1; j < len; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
                
            }
        }
        let temp = arr[maxIndex];
        arr[maxIndex] = arr[i];
        arr[i] = temp
    }
    return arr
};

const array = [20, 12, 53, 3];
let result = selectionSort(array)
console.log(result)