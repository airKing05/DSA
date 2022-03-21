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