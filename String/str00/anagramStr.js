// An anagram of a string is another string that contains the same characters, only the order of characters can be different

function anagramStr(str1, str2) {
    let l1 = str1.length;
    let l2 = str2.length;
    // string to array me convert krna hai fir map krwana ka each element ko
    let arr1 =[];
    let arr2 =[]; 
   
    let anagram;
    for(let i=0; i<l1; i++){
        arr1.push(str1[i])
    }
    for(let i=0; i<l2; i++){
        arr2.push(str2[i])
    }
     for(let i=0; i<l1; i++){
       for(let j=0; j<l1; j++){
        if(arr1[i]==arr2[j] && arr2[j]==arr1[i]){
          anagram = "anagram hai"
        }
       
       }
     }
       
    return anagram;
}

const str1 = "anilb";
const str2 = "banils";
const result = anagramStr(str1, str2);
console.log(result);