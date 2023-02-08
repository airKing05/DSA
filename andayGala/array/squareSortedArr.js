//l#7 977

//sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// [-4,-1,0,3,10] => [0,1,9,16,100]


//m1
// T: O(nlogn) S:O(1)

function squareSortedArr(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        arr[i] = arr[i] ** 2;

    }
    return arr.sort((a, b) => a - b);
}

const result = squareSortedArr([-4, -1, 0, 3, 10]);
console.log(result);


//m2
// T: O(N) S:O(N)

function squareSortedArr2(arr) {
    let len = arr.length;
    let newArr = new Array(len).fill(0);
    let left = 0;
    let right = len - 1;
    let index = right;
    while (left < right) {
        let leftSquare = arr[left] ** 2;
        let rightSquare = arr[right] ** 2;

        if (leftSquare < rightSquare) {
            newArr[index] = rightSquare;  //taking the index becose  => this  [ 0, 0, 1, 9, 100 ]
            right--;
        } else {

            newArr[index] = leftSquare;
            console.log(right, leftSquare);
            left++;
        }
        index--;
    }
    return newArr;
}

const result2 = squareSortedArr2([-4, -1, 0, 3, 10]);
console.log(result2);
