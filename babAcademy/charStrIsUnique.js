// L#07
// check that the charater of string is unique 


function isUnique(map){
    for(let key in map){
        if(map[key] === 1){
            return true;
        }else{
            return false;
        }
    }
}
function charStrIsUnique(str){
    let map = []
   for(let char of str){
      if(!map[char]){
        map[char] = 1;
      }else{
        map[char]++;
      }
   }
   return isUnique(map);
}

const string = "anilraj";
const result = charStrIsUnique(string);
console.log(result);