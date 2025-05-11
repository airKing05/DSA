
// p -796

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false


var rotateString = function(str, goal) {
    let len = str.length;
    let lenGoal =goal.length;
  
     if(len != lenGoal){
         return false;
     }
     
     
     for(let i =0; i<len; i++){
         if(str === goal){
             return true;
         }else{
            let firstELE = str[0];
            str = str.slice(1, len) + firstELE;
   
         }
     }

     return false
    
};

const result = rotateString("abcde", "cdeab")
console.log("result",result)