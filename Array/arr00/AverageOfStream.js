const AverageOfStream = (arr) => {
    let l = arr.length;
    let sum = 0;
    let count = 0;
    let newArr =[];
    for (let i = 0; i < l; i++) {
       sum = sum + arr[i]
       count++
       let dino = i+1;
       avg = parseFloat(sum/dino);
       newArr.push(avg);
    }
    return newArr
}
const arr = [10.0,20,30,40];
const result = AverageOfStream(arr);
console.log(result); 


//m-2
const AverageOfStream2 = (arr) => {
    let avg = arr.reduce((acc, curr, index, array) => {
        acc = acc + curr
        return acc
    }, 0)
    return avg / arr.length
}


const result2 = AverageOfStream2([0, 8, 1, 2, 4, 8, 5, 6, 12, 9])
console.log(result2)