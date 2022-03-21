//Given a array of length N, at each step it is reduced by 1 element. In the first step the maximum element would be removed, while in the second step minimum element of the remaining array would be removed, in the third step again the maximum and so on. Continue this till the array contains only 1 element. And find the final element remaining in the array.

// not able to store last element of the array.

leftElementByMinMax = (arr) => {
    let l = arr.length;
    // const max = arr[1];
    // const min = arr[0]; 
    let i = 0;
    if(l<2){
        return arr
    }
    while (l > i) {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
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