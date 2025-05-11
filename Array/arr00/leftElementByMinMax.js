//Given a array of length N, at each step it is reduced by 1 element. 
// In the first step the maximum element would be removed, 
// while in the second step minimum element of the remaining array would be removed, 
// in the third step again the maximum and so on. Continue this till the array contains only 1 element. 
// And find the final element remaining in the array.



// m1 withput sorting
leftElementByMinMax = (arr) => {
    let l = arr.length;
    // const max = arr[1];
    // const min = arr[0]; 
    let i = 0;
    // if(l<2){
    //     return arr
    // }
    while (l > i) {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        // when one element is remain in arr
        if (arr.length == 1) {
            return ` last element in array ${arr}`;
        }
        if (i % 2 == 0) {
            indexOfMax = arr.indexOf(max);
            removeMaxElement = arr.splice(indexOfMax, 1)
            console.log(removeMaxElement)
        } else {
            indexOfMin = arr.indexOf(min);
            removeMinElement = arr.splice(indexOfMin, 1)
            console.log(removeMinElement)
        }
        i++
       

    }
    return arr

}

const arr = [1, 8, 3, 20, 5, 15, 6, 7];
const result = leftElementByMinMax(arr);
console.log(result);



// m2 by sorting


function leftElementByMinMax1(arr) {
    let newArr = arr.sort((a, b) => a - b);
    //console.log("newArr", newArr)
    for (let i = 0; i < newArr.length; i++) {
        if (newArr.length == 1) {
            return;
        }
        if (newArr.length % 2 == 0) {
            newArr.pop();
        } else {
            newArr.shift();
        }
    }
    return newArr[0]
}

const result1 = leftElementByMinMax1([2, 4, 6, 18, 4, 1, 7]);
console.log(result1)