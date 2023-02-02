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

//baba acedmy 
// add two strings withot paarInt method

//jwel in stone

function map(str){
  let obj = {};
  for(let i of str){
    obj[i] = obj[i]+1 || 1;
  }
  return obj;
}
function func(str) {
  let palindrome = true
  for(let i = 0; i<str.length/2; i++){
    if (str[i] != str[str.length-(i+1)]){
        palindrome = false;
        break;
     }
  }
  return palindrome
};

const result = func("abbcba");
console.log(result)