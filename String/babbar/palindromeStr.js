// if question asked for case senctive
// str.toLowerCase();
// console.log( str.toLowerCase())

const palindrome = (str) =>{
  
   let l = str.length;
   let s = 0;
   let e = l-1
  
   for(let i =0; i<l/2; i++)  
   if(str[s]===str[e]) return true 
   return false
};
const string = "Abcdcba"
const result = palindrome(string);
 console.log(result);