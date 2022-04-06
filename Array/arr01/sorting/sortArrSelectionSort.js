// not take extra space so space complexity == S(1)
// first loop is running n-1 time, second loop is also comparing value to n times 
// time complexity = O(n**2);    1 + 2 + 3 + ... + n-2 + n- 1 + n == n(n-1)/2


// wil use only is array size is sort then will is selection sort only.

const sortArr = () => {
    let l = arr.length;
    let i = 0;
    let temp;
    while (i < l - 1) {
        let minIndex = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j

            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        console.log(arr)
        i++;
    }
    return arr;
}

const arr = [4, 3, 5, 4, 1];
const result = sortArr(arr);
console.log(result);


// it is not a stable to algorithm because of order of input 4 is changing
// input [ 4i, 3, 5, 4ii, 1]
// [ 1, 3, 5, 4ii, 4i ]
// [ 1, 3, 5, 4ii, 4i ]
// [ 1, 3, 4ii, 5, 4i ]
// [ 1, 3, 4ii, 4i, 5 ]
// [ 1, 3, 4, 4, 5 ]