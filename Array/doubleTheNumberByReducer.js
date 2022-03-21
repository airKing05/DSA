const arr = [1, 2, 3, 4];

arr.reduce((accumulator, currentValue, index, array) => 
array[index] = array[index] + array[index] );

console.log(arr)