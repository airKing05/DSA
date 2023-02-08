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

// sting compression
// "aabcccaaaddb" => "a2b1c3a3d2b1"
// url encoded

function func(str) {
  str = str.split(" ").join("");
  let canformPalindrom = true;
  let len = str.length;
  let obj ={};

  for(let key of str){
    obj[key] = obj[key]+ 1 || 1;
  }

  if(len%2 ===1){
    // ydi length odd hogi to
    // ek se jyada char ka count odd nahi hona chahiye
    let count = 0;

    for(let key of str){
      if(obj[key]%2 === 1 || obj[key] ===1){
        count++;
      }
      if(count>1){
        canformPalindrom =false
      }
    }
  }else{
    // even
    // ek char ke alawa baki ke char ki count even hi honi chaiye

    for(let key of str){
      if(obj[key]%2 === 1){
       canformPalindrom = false
      }
    }
  }
  return canformPalindrom;
}

const result = func("abaa");
console.log(result);