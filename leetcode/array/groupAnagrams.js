// leetcode - 49

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


function groupAnagrams(arr){
    
    const groupAnagramsObj = {};
    for(let i=0; i<arr.length; i++){
        const sortKeyStr =arr[i].split("").sort().join('');
        if(groupAnagramsObj[sortKeyStr]){
            groupAnagramsObj[sortKeyStr].push(arr[i])
        }else{
            groupAnagramsObj[sortKeyStr] = [arr[i]];
        }
    }
    
    
    
    
    console.log("alfaStrs", groupAnagramsObj)
    return Object.values(groupAnagramsObj);
}

groupAnagrams(["eat","tea","tan","ate","nat","bat"])