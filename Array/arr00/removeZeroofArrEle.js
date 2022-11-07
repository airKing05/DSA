const array = [101, 103, 10.5, 1006];

// remove 0
let newArr = [];

for (let i of array) {
    let char = i.toString();
    let newNum = parseFloat(char.split("0").join(""));
    newArr.push(newNum)
}

console.log(newArr)