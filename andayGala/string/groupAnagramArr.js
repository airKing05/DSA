// L#7 49
//Given an array of strings strs, group the anagrams together

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

// sort each str by later

//       i = 0     1       2      3      4      5
// strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

//                 0     1       2      3      4      5
// sortedStrs = ['aet', 'aet' ,'ant', 'aet', 'ant', 'abt'];
// hash['aet'] = ['eat','tea', 'ate'];
// hash['ant'] = ['tan', 'nat'];
// hash['abt'] = ['bat'];

// return hash's value;


//T: O(N*NlogN) and S: O(N) 

function groupAnagramArr(strs){
    let sortedStrs = strs.map((str)=> str.split('').sort().join(''));

    let obj = {};

    for(let i=0; i<strs.length; i++){
        if(!obj[sortedStrs[i]]){
            obj[sortedStrs[i]] = [strs[i]];
        }else{
            obj[sortedStrs[i]].push(strs[i])
        }
    }
   return Object.values(obj);

}
const result = groupAnagramArr(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(result);