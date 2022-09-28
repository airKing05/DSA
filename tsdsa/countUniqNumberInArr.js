// L#04
// find the uniq numbers count in given array
// [1,1,3,4,4,6]
// M1 => take new array push number on it if same number is exit already don't push that, in this case time complexity is O(N) or quadratic
// 


// M2 => will work if array is sorted   O(n)
//  i j              i   j  (i!=j)                                   i j 
// [1,1,3,4,4,6] => [1,1,3,4,4,6] =>(i++ and  arr[i] = arr[j]) => [1,3,3,4,4,6] 
function uniqNumberM1(arr) {
    const len = arr.length;
    if (len > 0) {
        let i = 0;
        for (let j = 1; j < len; j++) {
            if (arr[i] !== arr[j]) {
                i++;
                // replace current i-th position value with the current j-th position value
                arr[i] = arr[j]
            }

        }
        console.log(arr.slice(0, i + 1))
        return i + 1
    } else {
        throw new Error("array length should not be Zero")
    }
}

const array = [1, 1, 3, 4, 4, 4, 4, 6, 6, 6, 7, 8, 8];
const resultM1 = uniqNumberM1(array);
console.log(resultM1)