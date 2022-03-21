function longestName(arr) {
    let l = arr.length;
    let nameLen = [];
    for(let i =0; i<l; i++){
       nameLen.push(arr[i].length);
    }
    let maxLen = Math.max(...nameLen);
    let maxLenIndex = nameLen.indexOf(maxLen);
    let maxLenName = arr[maxLenIndex];
    return maxLenName;


}

const arr = ["anil", "anilraj", "anilrajmeena", "bundi"]
const result = longestName(arr);
console.log(result);
