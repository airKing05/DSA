//L#19
// check which charator is maximumaly occured in given string
//  O(n) will take more time with respected to the anyohter algorithm

const maxOccurringCharStr = (str) =>{
const map ={};
str.split("").forEach(ele => {
    map[ele] = map[ele] ? map[ele] + 1 : 1; 
});
let max = 1;
let maxChar = str[0];
for(let key in map){
    if(map[key]>max){
        max = map[key];
        maxChar = key;
    }
}
return maxChar;

}

const string = "anilraj";
const result = maxOccurringCharStr(string);
console.log(result);