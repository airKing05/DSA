// bianry to decimal

//100 => 1 * 2 ** 2 + 0 * 2 ** 1 + 0 * 2 ** 0 = 4


// decimal to binaray

//4=> 4%2=0, 2%2=0, 1%2=1;

// chek the prime number by rcursion

// reverse Integer
//123=>321

//total prime number 


//####Array
// primet alternative number oF ARRAY

//find number of maximun element
//count smaller number from givn array
// double the number by reduce method

//add and even count

// fascinatingNumber

// get elements form the nested array

//hcf
// remver min and max ele from array till array.length ==0

// maximun length name

// max number in array

// filter numbeer from array

// palendromic number from array

// prime number on array

// remove multiple element from array

// remove 0's from array;



//babbar01

//pair of elemets theris should be equal to 0

// intersection of two array;

// reverse array after k-th indexAfter;


function func(arr, k) {
  let len = arr.length;
  let j = 0;
  for (let i = k; i < (len - k); i++) {
    console.log(arr[i], arr[len - (j + 1)]);
    [arr[i], arr[len - (j + 1)]] = [arr[len - (j + 1), arr[i]]]
    j++;
  }
  return arr
}
const result = func([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log(result)