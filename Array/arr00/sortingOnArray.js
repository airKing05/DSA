// sorting the array this technic is bubble sort O(n^2)

function sortingOnArray(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j + 1] <= arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }

  }
  return arr
}
let array = [1, 3, 2, 4, 2, 5, 1, 3, 0];
const result = sortingOnArray(array);
console.log(result)