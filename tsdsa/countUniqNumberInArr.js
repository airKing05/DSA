// L#04
// find the uniq numbers count in given array
// [1,1,3,4,4,6]
// M1 => take new array push number on it if same number is exit already don't push that, in this case time complexity is O(N) or quadratic
// it will work if array is sorted
function uniqNumberM1(arr){
    const len = arr.length;
    let newArr = [];

    for (let i = 0; i < len; i++) {
        if (newArr.length === 0) {
            newArr.push(arr[i])
        } else {
            if (newArr[newArr.length - 1] !== arr[i]) {
                newArr.push(arr[i])
            }
        }
    }
    return newArr.length;
}
const array = [1, 1, 3, 4, 4, 4, 4, 6, 6, 6, 7, 8, 8];
const resultM1 = uniqNumberM1(array);
console.log(resultM1)


// M2 => will work if array is sorted   O(n)
//  i j              i   j  (i!=j)                                   i j 
// [1,1,3,4,4,6] => [1,1,3,4,4,6] =>(i++ and  arr[i] = arr[j]) => [1,3,3,4,4,6] 
function uniqNumberM2(arr) {
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

const array2 = [1, 1, 3, 4, 4, 4, 4, 6, 6, 6, 7, 8, 8];
const resultM2 = uniqNumberM2(array);
console.log(resultM2)



// m3
// create map 
// create array of map's keys
function uniqNumberM3(arr) {
   let map ={}
   for(let key of arr){
    map[key] = (map[key] || 0) + 1 
   }
   let newArr = Object.keys(map);
   return newArr.length
}

const resultM3 = uniqNumberM3(array);
console.log(resultM3)