// babacademy pretcie 

// add string number



function reverse(str1) {
let str = str1
//str.split("").reduce((a,b)=> a = b + a ,"")
let len = str.length;
let start = 0;
let end = len-1;
for(let i=0; i<len/2; i++){
//console.log([str[start], str[end]] ,  [str[end], str[start]])
 [str[start], str[end]] = [str[end], str[start]]
 //console.log([str[start], str[end]] ,  [str[end], str[start]])
 start++;
 end--;
 console.log(start, end)
 //console.log(str)
}
return str;
}
const result =reverse("anil");
console.log(result)

