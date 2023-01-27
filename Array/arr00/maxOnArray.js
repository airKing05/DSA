let arr = [1,2,3,4,5, 8, 6,10];
let l = arr.length;

let max = arr[0];

for (let i=1; i<l; i++){
    if(arr[i]>= max){
        max=arr[i];
        
    }

}
console.log(max)


// m2 using reduce method

const maxOnArr = arr => {
    let max = arr.reduce((acc, curr, index, arr) => {
        if (curr > acc) {
            acc = curr;
            //console.log("acc", acc)
            return acc
        } else {
            return acc
        }
    }, arr[0])
    return max;
}

const result1 = maxOnArr([1, 2, 3, 4, 12, 5, 8, 6, 10]);
console.log(result1)