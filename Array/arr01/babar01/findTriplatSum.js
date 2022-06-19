const findTriplatSum = (arr, s) => {
    let l = arr.length;
    let pair = [];
    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            for (let k = i+2; k < l; k++) {
                if (arr[i] + arr[j] + arr[k] === s) {   // optimization 
                    let temp = [];
                    let mini = Math.min(arr[i], arr[j], arr[k]);
                    let maxi = Math.max(arr[i], arr[j], arr[k]);
                    let mid = mini + maxi / 2
                    temp.push(arr[i], arr[j], arr[k])
                    pair.push(temp);   // array pushing inside a array so   2D array will created
                }
            }
        }
    }
   s
    return pair;

};

const array = [1, 2, 3, 4, 5];
const sumIsEqual = 12;
const result = findTriplatSum(array, sumIsEqual);
console.log(result)