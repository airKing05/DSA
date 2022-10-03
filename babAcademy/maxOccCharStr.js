// L#03

// most occuring character in string
// how many time it occured

let string = "a$b#$b$b$e$cc3e#e$ed$d$de";

function maxOccCharStr(str){
   let len = str.length;
   let map = {};
   let maxChar = str[0];
   let max = 1;
   for(let char of str){
      map[char] = (map[char] || 0) + 1;
   };

   for(let char in map){
    if(map[char]>max){
        max = map[char];
        maxChar = char;
    }
   }

   return {
    count: max,
    character: maxChar
   };
}

const result = maxOccCharStr(string);
console.log(result);