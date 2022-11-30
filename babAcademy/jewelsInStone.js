// string playlist 
// total numbers of jewels in Stone
// str1 contian jewels(j) and str2 are stones(s)
// counte jewels(str1 ele) in stone(str2 ele) 
// 'a' !== 'A'

// ex- 
// 'z', 'ZZ' => 0
// 'abc' 'abbd' => 3

function countEle(str){
    let map ={};
    for(let ele of str){
       map[ele] = map[ele] ? map[ele] + 1: 1;
    }
    return map;
}
function jewelsInStone(j, s){
    let objj = countEle(j);
    let objs = countEle(s);
    let count = 0;
    for(let key in objj){
        if(objs[key]){
           count = count+ objs[key]
        }
    }
    console.log(objj, objs)
    return count;
}

let jewels = "ab";
let stones = "abbbbda";
let result = jewelsInStone(jewels, stones);
console.log(result);